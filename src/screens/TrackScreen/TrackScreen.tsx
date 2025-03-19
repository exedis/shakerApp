import { useStores } from "@store";
import { observer } from "mobx-react-lite";
import React from "react";

export const TrackScreen = observer(() => {
  const {
    PlayerStore: { currentTrack, isActiveTrackExist },
  } = useStores();

  return (
    <div>
      {!isActiveTrackExist ? (
        <>Нет трека...</>
      ) : (
        <>
          <div>
            <img src={currentTrack.coverPath} alt="" width={160} height={160} />
          </div>
          {currentTrack.artist} {currentTrack.title}
        </>
      )}
    </div>
  );
});
