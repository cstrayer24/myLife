import baseData from "@/types/userBaseData";

export default function recomendGroups(data: baseData) {
  console.log(data);
  const keywords = [];

  if (data.mental.employment_status === "schooling") {
    console.log("in here");
    keywords.push("school");
  }

  return keywords;
}
