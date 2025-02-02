import { useStores } from "@store";
import { observer } from "mobx-react-lite";
import React from "react";
import AudioPlayer from "react-h5-audio-player";

export const TrackScreen = observer(() => {
  const {
    TrackStore: { currentTrack, isActiveTrackExist },
  } = useStores();

  return (
    <div>
      {!isActiveTrackExist ? (
        <>Загрузка...</>
      ) : (
        <>
          <div>
            <img src={currentTrack.coverPath} alt="" width={160} height={160} />
          </div>
          {currentTrack.artist} {currentTrack.title}
          <AudioPlayer src={currentTrack.trackPath} />
        </>
      )}
    </div>
  );
});
