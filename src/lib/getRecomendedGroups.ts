import baseData from "@/types/userBaseData";
import recomendGroups from "./recomendGroups";
import group_t from "@/types/group_t";

export default async function getRecomendedGroup(data: baseData) {
  const groups = recomendGroups(data);
  console.log(groups);
  const req = await fetch(`/api/get-group-by-keyword`, {
    method: "POST",
    body: JSON.stringify(groups),
  });
  console.log(req);
  const res: group_t[] = await req.json();
  console.log(res);

  return res;
}
