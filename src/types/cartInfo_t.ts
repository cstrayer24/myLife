export type cartItem_t = {
  id: string;
  name: string;
  price: number;
  image: string;
  keyForFrontEnd?: string;
};

type cartInfo_t = {
  total: number;
  items: cartItem_t[];
};

export default cartInfo_t;
