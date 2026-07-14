import chokidar from "chokidar";
import { execSync } from "child_process";

const PROJECT_DIR = process.cwd();
const GIT_REMOTE = "origin";
const GIT_BRANCH = "master";

let timeout: NodeJS.Timeout | null = null;

function runCommand(command: string) {
  try {
    const output = execSync(command, {
      cwd: PROJECT_DIR,
      stdio: "pipe",
      encoding: "utf-8",
    }).toString();
    console.log(`[${new Date().toLocaleTimeString()}] ${command}`);
    if (output.trim()) {
      console.log(output.trim());
    }
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error executing: ${command}`);
    console.error(error instanceof Error ? error.message : String(error));
  }
}

function debouncedSync() {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    try {
      const status = execSync("git status --porcelain", {
        cwd: PROJECT_DIR,
        stdio: "pipe",
        encoding: "utf-8",
      }).toString();

      if (status.trim()) {
        console.log(`\n[${new Date().toLocaleTimeString()}] Changes detected, syncing...`);
        runCommand("git add -A");
        runCommand(`git commit -m "auto: sync changes from ${new Date().toISOString()}"`);
        runCommand(`git push ${GIT_REMOTE} ${GIT_BRANCH}`);
        console.log(`[${new Date().toLocaleTimeString()}] Sync complete\n`);
      }
    } catch (error) {
      console.error(`[${new Date().toLocaleTimeString()}] Error checking git status:`);
      console.error(error instanceof Error ? error.message : String(error));
    }
  }, 2000);
}

console.log("👀 Watching for changes...");
console.log(`📁 Directory: ${PROJECT_DIR}`);
console.log(`🌿 Branch: ${GIT_BRANCH}`);
console.log(`🔄 Auto-push enabled\n`);

const watcher = chokidar.watch(PROJECT_DIR, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  depth: 10,
});

watcher.on("change", debouncedSync);
watcher.on("add", debouncedSync);
watcher.on("unlink", debouncedSync);
watcher.on("addDir", debouncedSync);
watcher.on("unlinkDir", debouncedSync);
