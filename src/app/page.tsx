"use client";

import CommunitySection from "@/components/community-section";
import GithubSection from "@/components/github-section";
import GuiSection from "@/components/gui-section";
import ModulesSection from "@/components/modules-section";
import NavBar from "@/components/navbar";
import StatsSection from "@/components/stats-section";
import VideoSection from "@/components/video-section";
import useGitHubDownloads from "@/hooks/useGithubDownloads";
import useModuleCount from "@/hooks/useModuleCount";
import Image from "next/image";
import Link from "next/link";

const developers = [
  {
    name: "Pan4ur",
    avatarUrl: "https://minotar.net/avatar/Pan4ur/100",
  },
  {
    name: "06ED",
    avatarUrl: "https://minotar.net/avatar/06ED/100",
  },
];

export default function Home() {
  let downloads = useGitHubDownloads("Pan4ur", "thunderhack-recode");
  const repoUrl =
    "https://github.com/Pan4ur/ThunderHack-Recode/tree/main/src/main/java/thunder/hack/modules";
  const { loading, error, modules } = useModuleCount(repoUrl);

  if (!downloads) {
    downloads = 10;
  }

  console.log(downloads);
  console.log(modules);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
                    Unleash Your Minecraft Experience
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the ultimate Minecraft utility mod that enhances
                    your gameplay and streamlines your experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative w-full">
                <Image
                  src="/images/thunderhack-main.png"
                  alt="Minecraft Utility Mod"
                  fill
                  className="skew-y-12 shadow-lg shadow-gray-400 shadow-x rounded-xl shadow-color-change"
                />
              </div>
            </div>
          </div>
        </section>
        <StatsSection downloads={downloads} />
        <GuiSection />
        <ModulesSection modules={modules} />
        <VideoSection />
        <GithubSection />
        <CommunitySection />
      </main>
    </div>
  );
}
