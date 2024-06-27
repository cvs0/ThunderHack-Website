import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:border-gray-700 z-40">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <h1 className="font-glitch-font text-[50px]">THUNDERHACK</h1>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 text-center flex justify-center items-center">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#github"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
