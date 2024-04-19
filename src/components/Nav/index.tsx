import { baseUser } from "@/types/userBaseData";
import UserView from "./UserView";
import NavItems from "./NavItems";
import navItem_t from "@/types/navItem_t";

export default function Nav({ userInfo }: { userInfo: baseUser }) {
  const navItems: navItem_t[] = [
    // { displayText: "paths", slug: "paths" },
    { displayText: "physical", slug: "physical" },
    { displayText: "social", slug: "social" },
    { displayText: "spots", slug: "spots" },
    { displayText: "get premium", slug: "get-pro" },
    { displayText: "Merch", slug: "shop" },
    { displayText: "goals", slug: "goals" },
  ];
  // console.log(`${userInfo.pfp} from nav/index.ts`);
  return (
    <div className=" h-full bg-ml-forest w-full  flex flex-col gap-40 ">
      <div>
        <UserView username={userInfo.username} pfpUrl={userInfo.pfp} />
      </div>

      <div className=" h-fit">
        <NavItems items={navItems} />
      </div>
    </div>
  );
}
