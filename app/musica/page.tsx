import MusicPlayer from '@/components/MusicPlayer';

const pistas = [
  {
    id: 1,
    titulo: 'Nebula Groove',
    artista: 'Danny Blue Jet',
    src: '/assets/nebula-groove.mp3',
    cover: '/assets/cover-nebula.png',
  },
  {
    id: 2,
    titulo: 'Retrojet Drive',
    artista: 'Danny Blue Jet',
    src: '/assets/retrojet-drive.mp3',
    cover: '/assets/cover-retrojet.png',
  },
];

export default function MusicaPage() {
  return (
    <section className="section-musica">
      <div className="container">
        <h2>Música</h2>
        <p className="music-intro">
          Escucha las pistas de Danny Blue Jet — reemplaza los mp3 en{' '}
          <code>/public/assets/</code> con tus propios archivos de audio.
        </p>
        <MusicPlayer pistas={pistas} />
      </div>
    </section>
  );
}
