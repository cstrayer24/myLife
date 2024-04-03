import React, { createContext, useState } from "react";

import pfState from "@/types/pathFormState";
export const PmCtx = createContext({});
export default function PathMakeCtx({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  const [pathState, setPathState] = useState({
    currState: pfState.PINFO,
    currPathid: "",
    items: {},
  });
  return (
    <PmCtx.Provider value={{ pathState, setPathState }}>
      {children}
    </PmCtx.Provider>
  );
}
