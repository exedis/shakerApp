import { makeObservable, observable } from "mobx";

export class PlaylistStore {
  playlists = [];

  constructor() {
    makeObservable(this, {
      playlists: observable,
    });
  }
}
