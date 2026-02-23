'use client';
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ tracks }: { tracks: any[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    playing ? a.play() : a.pause();
  }, [playing, index]);

  function next() {
    setIndex((i) => (i + 1) % tracks.length);
    setPlaying(true);
  }

  function prev() {
    setIndex((i) => (i - 1 + tracks.length) % tracks.length);
    setPlaying(true);
  }

  return (
    <div className="music-player">
      <img src={tracks[index].cover} alt={tracks[index].title} className="cover" />
      <div className="player-controls">
        <h4>{tracks[index].title}</h4>
        <div className="controls">
          <button onClick={prev} className="btn">◀</button>
          <button onClick={() => setPlaying((p) => !p)} className="btn">{playing ? '⏸' : '▶'}</button>
          <button onClick={next} className="btn">▶▶</button>
        </div>
        <audio ref={audioRef} src={tracks[index].src} onEnded={next} />
      </div>
    </div>
  );
}