import ToggleSwitch from "@/components/ui/toggle-switch/toggle-switch";
import Link from "next/link";
import { SiStorybook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold">Quick Links</h2>
        <div className="flex flex-row gap-8 mb-8">
          <Link
            href="https://673b9400d5550feb1975d271-eiuyvjcmjr.chromatic.com/"
            className="text-sm text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <SiStorybook className="inline mr-2" />
            Storybook
          </Link>
          <Link
            href="https://github.com/jakwakwa/togglebutton-codingexcersise-jkotzee"
            className="text-sm text-gray-500 hover:text-gray-900"
            target="_blank"
          >
            <FaGithub className="inline mr-2" />
            Github
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Toggle Switch Examples</h1>
        <div className="flex flex-row gap-8 row-start-2 items-center sm:items-center">
          <ToggleSwitch iconOnly />

          <ToggleSwitch label="Create" trailingIcon isChevron size="sm" />
          <ToggleSwitch label="Filter" trailingIcon isChevron size="md" />
          <ToggleSwitch label="Export" trailingIcon isChevron size="lg" />
          <ToggleSwitch label="Sort" leadingIcon isChevron disabled={true} />
          <ToggleSwitch
            appearance="subtle"
            label="Subtle"
            trailingIcon
            isChevron
          />
        </div>
        <div className="w-full h-10">
          <ToggleSwitch label="Download" width="full" />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
