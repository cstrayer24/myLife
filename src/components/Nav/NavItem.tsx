import navItem_t from "@/types/navItem_t";
import styles from "@/transitions/navHoverTransitions.module.css";
import { useRouter } from "next/navigation";
export default function NavItem({ item }: { item: navItem_t }) {
  const router = useRouter();

  const { displayText, slug } = item;
  return (
    <div
      className={`${styles.navHover} w-full h-9 border-y border-y-white text-center text-white flex justify-center items-center hover:bg-white/65 cursor-pointer`}
      onClick={(e) => {
        router.push(`/home/${slug}`);
      }}
    >
      <h2>{displayText}</h2>
    </div>
  );
}
