import navItem_t from "@/types/navItem_t";
import NavItem from "./NavItem";

export default function NavItems({ items }: { items: navItem_t[] }) {
  return (
    <div>
      {items.map((v, i) => {
        return <NavItem item={v} key={i} />;
      })}
    </div>
  );
}
