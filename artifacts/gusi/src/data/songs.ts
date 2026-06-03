export type Song = {
  id: string;
  title: string;
  artist?: string;
  description?: string;
  audioSrc: string;
};

export const SONGS: Song[] = [
  {
    id: "gusi-theme",
    title: "GUSI Theme",
    artist: "GUSI",
    description: "Our featured track — the sound of an evening at GUSI.",
    audioSrc: "/music/gusi-theme-song.mp3",
  },
];
