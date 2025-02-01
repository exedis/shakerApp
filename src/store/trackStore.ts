import { TrackService } from "@services/TrackService";
import { action, flow, makeObservable, observable } from "mobx";

export class TrackStore {
  trackList = [];

  currentTrack = null;

  isFetching = false;

  constructor() {
    makeObservable(this, {
      currentTrack: observable,
      isFetching: observable,
      attach: action.bound,
      detach: action.bound,
      setCurrentTrack: action.bound,
      toggleTrackFavorite: action,
      loadTracks: flow.bound,
    });
  }

  attach() {
    // this.favorites = library.filter((track) => track.rating === 1);
    this.loadTracks();
  }

  toggleTrackFavorite(track): void {
    console.log("track", track);
    // this.favorites = library.filter((track) => track.rating === 1);
  }

  setCurrentTrack(track): void {
    console.log("set");
    this.currentTrack = track;
  }

  detach(): void {
    // this.favorites = [];
    this.trackList = [];
  }

  *loadTracks() {
    try {
      this.isFetching = true;

      try {
        this.trackList = yield TrackService.fetchTracks();
        // this.trackList = data;
      } catch (e) {
        console.error("Ошибка получения треков:", e);
      }
    } finally {
      this.isFetching = false;
    }
  }
}
