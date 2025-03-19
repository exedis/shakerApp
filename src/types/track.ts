export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  coverPath: string;
  trackPath: string;
  createdAt: string;
};

export type AddedFile = {
  uuid: string;
  file: unknown & { name?: string }; //TO DO FIX!
  isUploaded: boolean;
  isOnProgress: boolean;
  isError: boolean;
} & Blob;
