export default function genFname(username: string) {
  if (window.localStorage.getItem("unique_filename")) {
    return window.localStorage.getItem("unique_filename");
  } else {
    window.localStorage.setItem(
      `unique_filename`,
      `${username}_pfp_${window.crypto.randomUUID()}`
    );
    return window.localStorage.getItem("unique_filename");
  }
}
