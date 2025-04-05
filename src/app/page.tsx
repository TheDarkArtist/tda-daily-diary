import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="border-2 p-4 m-4 rounded-md dark:bg-black space-y-2">
        <h1 className="font-medium">TDA Daily Diary</h1>
        <p>
          The whole purpose of this applications is to keep records, organize
          your thoughts in a mannter that is not just elegant but memorizable;
          The applications is supposed to be like an archive of your thoghts,
          you research to save them all
        </p>
      </section>
      <section className="border-2 p-4 m-4 rounded-md dark:bg-black space-y-2">
        <p className="mb-1 font-medium">Here is an hight level idea:</p>
        <ul>
          <li> &gt; You just create a record.</li>
          <li> &gt; It gets saved automatically.</li>
          <li> &gt; You get a calander like inerface to access your records</li>
        </ul>
        <p className="text-zinc-400">
          Note: Records are like, a random though that comes to your mind, or
          some research that you&apos;re doing on something
        </p>
      </section>
      <section className="flex justify-center p-4 m-4 rounded-md space-y-2">
        <Button variant="outline" asChild>
          <Link href="/records">
            Get Started <ChevronRightIcon />
          </Link>
        </Button>
      </section>
    </div>
  );
}
