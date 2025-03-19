import React from "react";
import { observer } from "mobx-react-lite";
import { BottomMenuWrapper } from "./BottomMenu.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Path } from "@consts/path";
import { FaCloudUploadAlt, FaCog, FaMusic } from "react-icons/fa";
import { MenuTheme } from "@consts/common";

const ICON_SIZE = 30;

export const BottomMenu: React.FC = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToList = () => {
    navigate(Path.TO_HOME);
  };

  const handleGoToUlpoad = () => {
    navigate(Path.TO_UPLOAD);
  };

  const handleGoToSettings = () => {
    navigate(Path.TO_SETTINGS);
  };

  return (
    <BottomMenuWrapper>
      <div onClick={handleGoToUlpoad}>
        <FaCloudUploadAlt
          size={ICON_SIZE}
          color={
            location.pathname === Path.TO_UPLOAD
              ? MenuTheme.ACTIVE
              : MenuTheme.DEFAULT
          }
        />
      </div>
      <div onClick={handleGoToList}>
        <FaMusic
          size={ICON_SIZE}
          color={
            location.pathname === Path.TO_HOME
              ? MenuTheme.ACTIVE
              : MenuTheme.DEFAULT
          }
        />
      </div>
      <div onClick={handleGoToSettings}>
        <FaCog
          size={ICON_SIZE}
          color={
            location.pathname === Path.TO_SETTINGS
              ? MenuTheme.ACTIVE
              : MenuTheme.DEFAULT
          }
        />
      </div>
    </BottomMenuWrapper>
  );
});
