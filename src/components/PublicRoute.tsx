import { Path } from "@consts/path";
import { useStores } from "@store";
import { observer } from "mobx-react-lite";
import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = observer(
  ({ children }: { children: React.ReactNode }) => {
    const { AuthStore } = useStores();

    if (AuthStore.isAuthendificated) {
      return <Navigate to={Path.TO_HOME} replace />;
    }

    return <>{children}</>;
  }
);
