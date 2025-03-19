import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "@store";

export const TrackList: React.FC = observer(() => {
  const {
    PlayerStore: { setCurrentTrack, play },
    TrackStore: { trackList, attach, detach, isFetching },
  } = useStores();

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    play();
  };

  useEffect(() => {
    attach();
    return detach;
  }, [attach, detach]);

  if (isFetching) {
    return <div>Загрузка треков...</div>;
  }

  return (
    <>
      <h1>Список треков</h1>
      <ul>
        {trackList.map((track, index) => (
          <li key={index} onClick={() => handleTrackClick(track)}>
            {track.artist} - {track.title}
          </li>
        ))}
      </ul>
    </>
  );
});
