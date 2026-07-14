import { useRef, useState, useEffect } from "react";
import { Play, Pause, Square } from "lucide-react";

type MusicPlayerProps = {
  songTitle: string;
  artistName?: string;
  description?: string;
  audioSrc: string;
  compact?: boolean;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function MusicPlayer({ songTitle, artistName, description, audioSrc, compact = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // Pause any other audio playing on the page so tracks never overlap.
    document.querySelectorAll("audio").forEach((el) => {
      if (el !== audio) el.pause();
    });
    void audio.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setProgress(0);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const controlBtn =
    "inline-flex items-center justify-center w-11 h-11 rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-charcoal";

  return (
    <div
      className={`w-full ${
        compact ? "flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7" : "flex flex-col gap-5"
      } border border-gusi-gold/25 bg-gusi-charcoal/40 px-6 py-6 sm:px-8 sm:py-7`}
    >
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className={compact ? "sm:flex-1 min-w-0" : ""}>
        <h3 className="font-serif text-xl sm:text-2xl text-gusi-gold leading-tight truncate">{songTitle}</h3>
        {artistName && (
          <p className="text-xs uppercase tracking-[0.25em] text-gusi-porcelain/70 mt-1">{artistName}</p>
        )}
        {description && <p className="text-sm text-gusi-porcelain/70 font-light mt-2">{description}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:items-end">
        <div className="flex items-center gap-3" role="group" aria-label={`Audio controls for ${songTitle}`}>
          {isPlaying ? (
            <button
              type="button"
              onClick={handlePause}
              aria-label={`Pause ${songTitle}`}
              className={`${controlBtn} bg-gusi-gold text-gusi-charcoal border-gusi-gold hover:bg-transparent hover:text-gusi-gold`}
            >
              <Pause className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlay}
              aria-label={`Play ${songTitle}`}
              className={`${controlBtn} bg-gusi-gold text-gusi-charcoal border-gusi-gold hover:bg-transparent hover:text-gusi-gold`}
            >
              <Play className="w-5 h-5 translate-x-px" strokeWidth={1.75} aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            onClick={handleStop}
            aria-label={`Stop ${songTitle}`}
            className={`${controlBtn} border-gusi-gold/40 text-gusi-gold hover:bg-gusi-gold hover:text-gusi-charcoal`}
          >
            <Square className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <div className={`flex items-center gap-3 ${compact ? "sm:w-64" : "w-full"}`}>
          <span className="text-[11px] tabular-nums text-gusi-porcelain/70 w-9 text-right">
            {formatTime(currentTime)}
          </span>
          <div
            className="flex-1 h-1 bg-gusi-porcelain/15 rounded-full overflow-hidden"
            role="progressbar"
            aria-label={`Playback progress for ${songTitle}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div className="h-full bg-gusi-gold transition-[width] duration-200" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-[11px] tabular-nums text-gusi-porcelain/70 w-9">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
