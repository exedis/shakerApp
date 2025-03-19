import React from "react";
import { observer } from "mobx-react-lite";
import { Track } from "@src/types/track";
import { FaForward, FaPause, FaPlay } from "react-icons/fa";
import {
  BottomSidebarArtistTitle,
  BottomSidebarControls,
  BottomSidebarTrackCover,
  BottomSidebarTrackData,
  BottomSidebarTrackTitle,
  BottomSidebarWrapper,
} from "./BottomSidebar.styled";

type Props = {
  isPlaying: boolean;
  currentTrack: Track;
  progressValue: number;
  isActiveTrackExist: boolean;
  pause: () => void;
  play: () => void;
  previousTrack: () => void;
  nextTrack: () => void;
};
export const BottomSidebar: React.FC<Props> = observer(
  ({
    isPlaying,
    currentTrack,
    isActiveTrackExist,
    progressValue,
    pause,
    play,
    nextTrack,
  }) => {
    const handlePlayPause = () => {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    };

    const handleNextTrack = () => {
      nextTrack();
    };

    return isActiveTrackExist ? (
      <BottomSidebarWrapper progres={progressValue}>
        <BottomSidebarTrackData>
          <BottomSidebarTrackCover
            src={currentTrack.coverPath}
            alt={currentTrack.title}
            width={50}
            height={50}
          />
          <div>
            <BottomSidebarTrackTitle>
              {currentTrack.title}
            </BottomSidebarTrackTitle>
            <BottomSidebarArtistTitle>
              {currentTrack.artist}
            </BottomSidebarArtistTitle>
          </div>
        </BottomSidebarTrackData>
        <BottomSidebarControls>
          <div onClick={handleNextTrack}>
            <FaForward />
          </div>
          <div onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </BottomSidebarControls>
      </BottomSidebarWrapper>
    ) : null;
  }
);
