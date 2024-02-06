import baseData from "@/types/userBaseData";

function writeCache(data: baseData) {
  if (typeof window == "undefined") {
    return 0;
  }

  if (
    !window.localStorage.getItem("user-cache") ||
    JSON.stringify(
      window.localStorage.getItem("user-cache") != JSON.stringify(data)
    )
  ) {
    window.localStorage.setItem("user-cache", JSON.stringify(data));
  }
}

export default writeCache;
