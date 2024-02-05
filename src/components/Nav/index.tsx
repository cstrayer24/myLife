import { baseUser } from "@/types/userBaseData";
import UserView from "./UserView";
import NavItems from "./NavItems";
import navItem_t from "@/types/navItem_t";

export default function Nav({ userInfo }: { userInfo: baseUser }) {
  const navItems: navItem_t[] = [
    { displayText: "paths", slug: "paths" },
    { displayText: "spots", slug: "spots" },
    { displayText: "get pro", slug: "get-pro" },
    { displayText: "buy merch", slug: "shop" },
    { displayText: "goals", slug: "goals" },
  ];
  return (
    <div className=" h-full bg-ml-forest w-full z-0 flex flex-col gap-40 ">
      <div>
        <UserView username={userInfo.username} />
      </div>

      <div>
        <NavItems items={navItems} />
      </div>
    </div>
  );
}
