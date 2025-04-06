import { Button } from "@/components/ui/button";
import { getUserByUsername } from "@/lib/actions/user";
import { Edit3 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { username } = await params;
  const user = await getUserByUsername(username);

  if (!user) notFound();

  return (
    <div>
      <div className="relative flex justify-between p-6 bg-zinc-900">
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <Image
            className="border-4 border-orange-900 rounded-sm"
            src={user?.image || ""}
            alt={user?.username || ""}
            height={256}
            width={256}
          />
          <div>
            <div className="mb-4 text-sm">id: {user?.id}</div>
            <h1 className="text-4xl font-bold">{user?.name}</h1>
            <p className="font-medium">{user?.username}</p>
            <div className="mt-4 line-clamp-4">
              Hacking The Box Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odio omnis eos ipsam quasi commodi dolore natus atque,
              aspernatur exercitationem repellendus? Sed, quis, perspiciatis
              libero voluptates quaerat debitis, sunt inventore quisquam sed
              asperiores explicabo harum! Asperiores, iure veritatis deserunt
              sunt, consequatur magnam, labore molestias voluptatum possimus qui
              consectetur? Porro ipsum inventore veniam, dolor dolorem aliquam
            </div>
          </div>
        </div>
        <Button className="absolute top-4 right-3" variant="outline" size="sm">
          <Edit3 />
        </Button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">[+] Your Latest Records</h2>
        <ul className="mt-2">
          <li className="text-xl font-medium "> something</li>
          <li className="text-xl font-medium "> something</li>
          <li className="text-xl font-medium "> something</li>
          <li className="text-xl font-medium "> something</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
