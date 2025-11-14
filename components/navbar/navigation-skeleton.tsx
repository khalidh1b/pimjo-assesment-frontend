"use client";

export const NavigationSkeleton = () => {
  return (
    <div className="flex items-center gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
      ))}
    </div>
  );
};