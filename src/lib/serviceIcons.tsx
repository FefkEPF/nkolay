import {
  Sparkles,
  Video,
  TrendingUp,
  MessageSquareHeart,
  Users,
  Search,
  Share2,
  PenTool,
  Code,
  Smartphone,
  Printer,
  Layout,
  Server,
  Instagram,
  Shield,
  ShieldCheck,
  Briefcase,
  ShoppingBag,
  Mic,
  Target,
  Bot,
  Lock,
  FileCheck,
  BarChart,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Video,
  TrendingUp,
  MessageSquareHeart,
  Users,
  Search,
  Share2,
  PenTool,
  Code,
  Smartphone,
  Printer,
  Layout,
  Server,
  Instagram,
  Shield,
  ShieldCheck,
  Briefcase,
  ShoppingBag,
  Mic,
  Target,
  Bot,
  Lock,
  FileCheck,
  BarChart,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICON_MAP[name] ?? Sparkles;
  return <Cmp className={className ?? "w-6 h-6"} />;
}
