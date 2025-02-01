import React, { useEffect } from "react";
import "react-h5-audio-player/lib/styles.css";
import { observer } from "mobx-react-lite";
import { useStores } from "@store";
import { useNavigate } from "react-router-dom";
import { Path } from "@consts/path";

export const MainScreen = observer(() => {
  const {
    TrackStore: { trackList, attach, detach, setCurrentTrack, isFetching },
  } = useStores();
  const navigate = useNavigate();
  useEffect(() => {
    attach();
    return () => detach();
  }, [attach, detach]);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    navigate(Path.TO_TRACK);
  };

  if (isFetching) {
    return <div>Загрузка треков...</div>;
  }

  // if (error) {
  //   return <div>Ошибка: {error}</div>;
  // }
  return (
    <div>
      <h1>Музыкальный плеер</h1>
      <ul>
        {trackList.map((track) => (
          <li key={track.uuid} onClick={() => handleTrackClick(track)}>
            {track.artist} - {track.title}
          </li>
        ))}
      </ul>
      {/* {currentTrack && (
        <div>
          <h2>
            Сейчас играет: {currentTrack.artist} {currentTrack.title}
          </h2>
          <img src={currentTrack.coverPath} alt="" width={30} height={30} />
        </div>
      )} */}
    </div>
  );
});
