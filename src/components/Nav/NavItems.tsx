import navItem_t from "@/types/navItem_t";
import NavItem from "./NavItem";

export default function NavItems({ items }: { items: navItem_t[] }) {
  //the max height each item can be is 200
  const RANDOMFUCKINGHEIGHTLIMIT = 300;
  const heightClass = `h-[${RANDOMFUCKINGHEIGHTLIMIT}px]`;

  return (
    <div style={{ height: `${RANDOMFUCKINGHEIGHTLIMIT}px` }}>
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
