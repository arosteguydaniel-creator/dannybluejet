export interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;
  imagen: string;
  flowLink: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    titulo: 'Donde las Papas Queman',
    descripcion: 'Prueba del juego de mesa',
    precio: '$350 CLP',
    imagen: '/donde_las_papas_queman_1.png',
    flowLink:
      'https://www.flow.cl/btn.php?token=ia1f5a932a2ea6eec655742e9450f7fb08d4e25e',
  },
  {
    id: 2,
    titulo: 'El Juego de la Música',
    descripcion: 'Un juego de estrategia para amantes de la teoría musical.',
    precio: '$25.000 CLP',
    imagen: 'https://via.placeholder.com/200',
    flowLink: 'TU_LINK_DE_FLOW_AQUÍ',
  },
];
