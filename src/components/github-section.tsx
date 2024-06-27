import { GithubIcon } from "lucide-react";
import Link from "next/link";

const GithubSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="github">
      <div className="container relative z-10 grid grid-cols-1 items-center gap-8 py-24 md:grid-cols-2 md:py-32 lg:py-40">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Open Source
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            All of our projects are open source and available on GitHub. We are open to contributions from the community to further improve our projects.
          </p>
        </div>

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-200 relative -skew-y-3">
          <h5 className="mb-3 text-3xl font-extrabold text-gray-900">
            GitHub Repos
          </h5>
          <p className="text-sm font-normal text-black">
            Check our GitHub repositories for updates and more info.
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <a
                href="https://www.github.com/Pan4ur/ThunderHack-Recode"
                target="_blank"
                rel="noopener"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
              >
                <GithubIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  ThunderHack-Recode
                </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Pan4ur/ThunderHackPlus"
                target="_blank"
                rel="noopener"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
              >
                <GithubIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  ThunderHackPlus
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Pan4ur/ThunderHack-Updater"
                target="_blank"
                rel="noopener"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
              >
                <GithubIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  ThunderHack-Updater
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
