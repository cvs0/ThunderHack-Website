const formatNumber = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

const StatsSection = ({ allUsers, onlineUsers }: { allUsers: number, onlineUsers: number }) => {
  const formattedAllUsers = formatNumber(allUsers);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold tabular-nums animate-[counter_1s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
              <span className="supports-[counter-set]:sr-only">
                {formattedAllUsers}
              </span>
              K+
            </h2>
            <p className="text-lg text-gray-600">Total Users</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              {onlineUsers}
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
              --num: ${allUsers.toString().charAt(0)};
            }
          }
        `}
      </style>
    </section>
  );
};

export default StatsSection;
