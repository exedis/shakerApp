import { action, makeObservable, observable } from "mobx";

export class QueueStore {
  activeQueueId: string | null = null;

  constructor() {
    makeObservable(this, {
      activeQueueId: observable,
      setActiveQueue: action.bound,
    });
  }

  setActiveQueue(id: string) {
    this.activeQueueId = id;
  }
}
