import dynamic from 'next/dynamic';
const MusicPlayer = dynamic(() => import('../../components/MusicPlayer'), { ssr: false });

const tracks = [
  {
    id: 't1',
    title: 'Nebula Groove',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://via.placeholder.com/300x300.png?text=Nebula',
  },
  {
    id: 't2',
    title: 'Retrojet Drive',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://via.placeholder.com/300x300.png?text=Retrojet',
  },
];

export default function MusicaPage() {
  return (
    <section className="container">
      <h2 className="section-title">Música — Danny Blue Jet</h2>
      <p className="muted">Escucha, comparte y descarga (cuando esté disponible).</p>
      <div style={{ marginTop: 20 }}>
        <MusicPlayer tracks={tracks} />
      </div>
    </section>
  );
}