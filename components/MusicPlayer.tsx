'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Pista {
  id: number;
  titulo: string;
  artista: string;
  src: string;
  cover: string;
}

interface MusicPlayerProps {
  pistas: Pista[];
}

export default function MusicPlayer({ pistas }: MusicPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current = pistas[currentIndex];

  const playingRef = useRef(playing);
  playingRef.current = playing;

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    if (playingRef.current) {
      audioRef.current.play().catch(() => setPlaying(false));
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + pistas.length) % pistas.length);
    setPlaying(true);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % pistas.length);
    setPlaying(true);
  };

  return (
    <div className="music-player">
      <div className="player-cover">
        <Image
          src={current.cover}
          alt={current.titulo}
          width={220}
          height={220}
          className="player-cover-img"
          unoptimized
        />
      </div>
      <div className="player-info">
        <p className="player-title">{current.titulo}</p>
        <p className="player-artist">{current.artista}</p>
      </div>
      <audio ref={audioRef} src={current.src} onEnded={next} />
      <div className="player-controls">
        <button className="player-btn" onClick={prev} aria-label="Anterior">
          ⏮
        </button>
        <button className="player-btn play-btn" onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Reproducir'}>
          {playing ? '⏸' : '▶'}
        </button>
        <button className="player-btn" onClick={next} aria-label="Siguiente">
          ⏭
        </button>
      </div>
      <p className="player-hint">
        ⚠️ Placeholder — reemplaza los archivos en <code>/public/assets/</code>
      </p>
    </div>
  );
}
