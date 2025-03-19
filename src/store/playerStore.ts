import { Track } from "@src/types/track";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Howl } from "howler";

export class PlayerStore {
  currentTrack: Track = null;

  currentTrackInst = null;

  isActiveTrackExist = false;

  isPlaying: boolean = false;

  isFetching: boolean = false;

  lastUpdateTime = 0;

  progressValue = 0;

  currentTrackIndex = 0; ///TO DO

  updateInterval = 500;

  constructor() {
    makeObservable(this, {
      currentTrack: observable,
      isPlaying: observable,
      progressValue: observable,
      isActiveTrackExist: observable,
      currentTrackInst: observable,
      setNewTrack: action.bound,
      play: action.bound,
      pause: action.bound,
      nextTrack: action.bound,
      previousTrack: action.bound,
      updateProgress: action.bound,
      setCurrentTrack: action.bound,
    });
  }

  play() {
    if (!this.isPlaying) {
      this.currentTrackInst.play();
      this.updateProgress();
    }
  }

  pause() {
    this.currentTrackInst.pause();
  }

  nextTrack() {
    // this.isActiveTrackExist = true;
    // this.currentTrackIndex =
    //   (this.currentTrackIndex + 1) % this.trackList.length;
    // this.setNewTrack();
    // if (this.isPlaying) {
    //   this.play();
    // }
  }

  previousTrack() {
    // this.isActiveTrackExist = true;
    // this.currentTrackIndex =
    //   (this.currentTrackIndex - 1 + this.trackList.length) %
    //   this.trackList.length;
    // this.setNewTrack();
    // if (this.isPlaying) {
    //   this.play();
    // }
  }

  setNewTrack() {
    if (this.currentTrackInst) {
      this.currentTrackInst.unload(); // Очищаем предыдущий трек
    }

    this.currentTrackInst = new Howl({
      src: [this.currentTrack.trackPath],
      html5: true, // Используем HTML5 Audio
      onplay: () => {
        runInAction(() => {
          this.isPlaying = true;
        });
      },
      onpause: () => {
        runInAction(() => {
          this.isPlaying = false;
        });
      },
      onend: () => {
        this.nextTrack(); // Автоматически переключаем на следующий трек
      },
    });
  }

  setCurrentTrack(track: Track): void {
    if (this.currentTrack?.id !== track.id) {
      this.currentTrack = track;
      this.isActiveTrackExist = true;
      this.setNewTrack();
      this.lastUpdateTime = 0;
    }
  }

  updateProgress() {
    const now = Date.now();
    if (now - this.lastUpdateTime >= this.updateInterval) {
      const currentTime = this.currentTrackInst.seek(); // Текущая позиция в секундах
      const duration = this.currentTrackInst.duration(); // Общая длительность в секундах

      this.progressValue = (currentTime / duration) * 100;
      this.lastUpdateTime = now;
    }
    if (this.currentTrackInst.playing()) {
      requestAnimationFrame(this.updateProgress);
    }
  }
}
