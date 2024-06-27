import useTotalUsers from "@/hooks/useTotalUsers";
import { Skeleton } from "./ui/skeleton";

const formatNumber = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

const StatsSection = ({ downloads }: { downloads: number }) => {
  const formattedDownloads = formatNumber(downloads);
  const { totalUsersCount, error, isLoading } = useTotalUsers();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold tabular-nums animate-[counter_1s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
              <span className="supports-[counter-set]:sr-only">
                {formattedDownloads}
              </span>
              K+
            </h2>
            <p className="text-lg text-gray-600">Downloads</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              {isLoading ? <Skeleton className="h-10 w-20" /> : totalUsersCount}
            </h2>

            <p className="text-lg text-gray-600">Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">4.9/5</h2>
            <p className="text-lg text-gray-600">User Ratings</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes counter {
            from {
              --num: 0;
            }
            to {
              --num: ${downloads.toString().charAt(0)};
            }
          }
        `}
      </style>
    </section>
  );
};

export default StatsSection;
