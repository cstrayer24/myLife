import baseData from "@/types/userBaseData";

export default function recomendGroups(data: baseData) {
  const keywords = [];

  if (data.mental.employment_status === "schooling") {
    keywords.push("school");
  }

  return keywords;
}
