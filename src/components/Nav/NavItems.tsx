import navItem_t from "@/types/navItem_t";
import NavItem from "./NavItem";

export default function NavItems({ items }: { items: navItem_t[] }) {
  //the max height each item can be is 200
  const RANDOMFUCKINGHEIGHTLIMIT = 200;
  const fullHeight = RANDOMFUCKINGHEIGHTLIMIT * items.length;

  return (
    <div className={`h-[${200}px]`}>
      {items.map((v, i) => {
        return (
          <NavItem
            item={v}
            key={i}
            height={RANDOMFUCKINGHEIGHTLIMIT / items.length}
          />
        );
      })}
    </div>
  );
}
