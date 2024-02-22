export default function ISOToFreedomDate(isoString: string) {
  const MAXLEN = 2;

  const dateVals = isoString.split("-");
  if (dateVals[MAXLEN].startsWith("0")) {
    dateVals[MAXLEN] = dateVals[MAXLEN].split("")[1];
  }
  return `${dateVals[MAXLEN]}/${dateVals[1]}/${dateVals[0]}`;
}
