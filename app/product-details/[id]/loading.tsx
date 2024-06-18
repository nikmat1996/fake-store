import { Skeleton } from "@/components/ui/skeleton";

function SkeletonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-900 text-white p-4">
      <div className="max-w-2xl w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
        <Skeleton className="object-contain w-full h-64 sm:h-80 md:h-96" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-full sm:w-3/4 mb-2 sm:mb-4" />
          <Skeleton className="h-4 w-1/2 sm:w-1/4 mb-2" />
          <Skeleton className="h-4 w-2/3 sm:w-1/3 mb-2" />
          <Skeleton className="h-4 w-full mb-2 sm:mb-4" />
          <Skeleton className="h-4 w-full mb-2 sm:mb-4" />
          <Skeleton className="h-4 w-full mb-2 sm:mb-4" />
          <Skeleton className="h-10 w-full sm:h-12" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonPage;
