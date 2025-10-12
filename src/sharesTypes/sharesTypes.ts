export type Track = {
  _id: number,
  name: string,
  author: string,
  release_date: string,
  genre: string[],
  duration_in_seconds: number,
  album: string,
  logo: null,
  track_file: string,
  staredUser: number[],
};

export type PlayList = {
  _id: number,
  name: string,
  items: [],
  owner: [],
  __v: number,
};
