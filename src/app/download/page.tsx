import Link from "next/link";
import { CheckCircle } from "lucide-react";

const Download = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="py-24">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Download
          </h1>

          <div className="flex justify-center py-10">
            <Link
              href="https://github.com/Pan4ur/ThunderHack-Recode/releases/tag/latest"
              target="_blank"
              rel="noopener"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Latest
                </div>
              </button>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="py-10">
              <h2 className="text-2xl font-bold text-center">
                About ThunderHack
              </h2>
              <p className="mt-4 text-center text-gray-700 dark:text-gray-200">
                ThunderHack is a powerful tool designed to enhance your
                Minecraft experience. Download the latest version to explore the
                new features and improvements.
              </p>
            </section>

            <section className="py-10">
              <h2 className="text-2xl font-bold text-center">Features</h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="flex items-center justify-center border border-gray-600 p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                  Many Modules
                </div>
                <div className="flex items-center justify-center border border-gray-600 p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                  Long Term Support
                </div>
                <div className="flex items-center justify-center border border-gray-600 p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                  Actively Maintained
                </div>
                <div className="flex items-center justify-center border border-gray-600 p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                  Large Community
                </div>
              </div>
            </section>

            <section className="py-10">
              <h2 className="text-2xl font-bold text-center">Have an issue?</h2>
              <div className="flex justify-center space-x-4 mt-4">
                <Link
                  href="https://github.com/Pan4ur/ThunderHack-Recode/issues"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                      Report an Issue
                    </div>
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Download;
