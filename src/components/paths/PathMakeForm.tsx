import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";

import { PmCtx } from "./PathMakeCtx";
import pfState from "@/types/pathFormState";
import PathInfoForm from "./PathInfoForm";
import PathItemsForm from "./PathItemsForm";

export default function PathMakeForm() {
  const ctx = useContext(PmCtx) as {
    pathState: any;
    setPathState: Dispatch<SetStateAction<{}>>;
  };

  switch (ctx.pathState.currState) {
    case pfState.PINFO:
      return <PathInfoForm />;

    case pfState.PTREE:
      return <PathItemsForm />;
  }
}
