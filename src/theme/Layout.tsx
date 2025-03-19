import React from "react";
import { ReactNode } from "react";
import { LayoutBottomWrapper, LayoutWrapper } from "./Layout.styled";
import { BottomMenu } from "@components/BottomMenu/BottomMenu";
import { BottomSidebar } from "@components/BottomSidebar/BottomSidebar";
import { observer } from "mobx-react-lite";
import { useStores } from "@store";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = observer(({ children }) => {
  const {
    PlayerStore: {
      isPlaying,
      currentTrack,
      isActiveTrackExist,
      pause,
      play,
      previousTrack,
      nextTrack,
      progressValue,
    },
  } = useStores();

  return (
    <LayoutWrapper>
      {children}
      <LayoutBottomWrapper>
        <BottomSidebar
          progressValue={progressValue}
          isPlaying={isPlaying}
          currentTrack={currentTrack}
          isActiveTrackExist={isActiveTrackExist}
          pause={pause}
          play={play}
          previousTrack={previousTrack}
          nextTrack={nextTrack}
        />
        <BottomMenu />
      </LayoutBottomWrapper>
    </LayoutWrapper>
  );
});
