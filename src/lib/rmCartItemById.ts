import { cartItem_t } from "@/types/cartInfo_t";

export default function rmCartItemById(items: cartItem_t[], id: string) {
  const index = items.findIndex((v) => v.id === id);

  items.splice(index, 1);
}
