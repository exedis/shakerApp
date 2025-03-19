import { TrackService } from "@services/TrackService";
import { action, flow, makeObservable, observable } from "mobx";
import { Track } from "@src/types/track";

export class TrackStore {
  trackList: Track[] = [];

  isFetching = false;

  constructor() {
    makeObservable(this, {
      isFetching: observable,
      attach: action.bound,
      detach: action.bound,
      fetchTracks: flow.bound,
    });
  }

  attach() {
    this.fetchTracks();
  }

  detach(): void {
    this.trackList = [];
  }

  *fetchTracks() {
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
