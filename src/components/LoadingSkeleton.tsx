import { motion } from "motion/react";

export default function LoadingSkeleton() {
  const pulse = {
    opacity: [0.5, 1, 0.5] as number[],
    transition: { duration: 1.5, repeat: Infinity },
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <motion.div animate={pulse} className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto" />
        <div className="space-y-4">
          <motion.div animate={pulse} className="h-4 bg-gray-200 rounded w-full" />
          <motion.div animate={pulse} className="h-4 bg-gray-200 rounded w-5/6" />
          <motion.div animate={pulse} className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
        <motion.div animate={pulse} className="h-12 bg-gray-200 rounded-full w-40 mx-auto mt-8" />
        <p className="text-center text-sm text-gray-500 font-medium mt-6">Yükleniyor...</p>
      </div>
    </div>
  );
}
