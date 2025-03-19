import { TrackService } from "@services/TrackService";
import { AddedFile } from "@src/types/track";
import { action, flow, makeObservable, observable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export class UploadStore {
  files: AddedFile[] = [];
  isFetching: boolean = false;

  constructor() {
    makeObservable(this, {
      isFetching: observable,
      files: observable,
      setFiles: action.bound,
      // setUploading: action.bound,
      // markFileAsUploaded: action.bound,
      // markFileAsInProgress: action.bound,
      detach: action.bound,
      // getStatus: action.bound,
      handleUpload: flow.bound,
    });
  }

  detach() {
    this.files = [];
  }

  setFiles(files) {
    files.map((item) => ({
      uuid: uuidv4(),
      file: item,
      isUploaded: false,
      isOnProgress: false,
      isError: false,
    }));
  }

  // getStatus() {}

  // markFileAsInProgress(id) {
  // this.files = this.files.map((item) =>
  //   item.uuid === id ? { ...item, isOnProgress: true } : item
  // );
  // }

  // markFileAsUploaded(id) {
  // this.files = this.files.map((item) =>
  //   item.uuid === id
  //     ? { ...item, isUploaded: true, isOnProgress: false }
  //     : item
  // );
  // }

  *handleUpload() {
    this.isFetching = true;

    try {
      yield TrackService.uploadTracks(this.files);
    } catch (e) {
      console.error("Ошибка загрузки:", e);
    } finally {
      this.isFetching = false;
    }
  }
}
