import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { DiscIcon, GithubIcon, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export default function GithubSection() {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/Pan4ur/ThunderHack-Recode/contributors"
        );
        setContributors(response.data.slice(0, 16));
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }
    fetchContributors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="grid grid-cols-4 gap-4">
          {contributors.map((contributor, index) => (
            <Link key={index} href={contributor.html_url}>
              <Avatar className="rounded-lg border border-border w-20 h-20 md:w-24 md:h-24">
                <AvatarImage src={contributor.avatar_url} />
                <AvatarFallback>{index + 1}</AvatarFallback>
              </Avatar>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            Crafted with passion <br />
            <span className="bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">by a global community.</span>
          </h1>

          <p className="max-w-md">
            The development of ThunderHack is driven by a dedicated team of
            developers from across the globe. This innovative project combines
            cutting-edge technology and community-driven insights to deliver a
            top-tier experience. Join us in shaping the future of this all in
            one Minecraft utility mod.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="https://discord.gg/zqxNHVz3">
              <Button variant="outline" className="flex items-center gap-2">
                <DiscIcon className="text-purple-500 h-5 w-5" />
                Discord
              </Button>
            </Link>

            <Link href="https://github.com/Pan4ur/ThunderHack-Recode">
              <Button variant="outline" className="flex items-center gap-2">
                <GithubIcon className="text-purple-500 h-5 w-5" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
