export default function formDataToObj(data: FormData) {
  const obj = {} as any;

  data.forEach((v, k) => {
    obj[k] = v;
  });

  return obj;
}
