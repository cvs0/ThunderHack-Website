import Link from "next/link";

const Download = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="py-24">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Download
          </h1>

          <div className="flex justify-center py-10 ">
            <Link
              href="https://github.com/Pan4ur/ThunderHack-Recode/releases/tag/latest"
              target="_blank"
              rel="noopener"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Latest
                </div>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Download;
