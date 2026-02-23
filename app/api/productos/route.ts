import { NextResponse } from 'next/server';

const PRODUCTS = [
  {
    id: 'p1',
    title: 'Donde las Papas Queman',
    description: 'Juego de mesa — edición demo.',
    price: '350 CLP',
    image: '/donde_las_papas_queman_1.png',
    flowLink: 'https://www.flow.cl/btn.php?token=ia1f5a932a2ea6eec655742e9450f7fb08d4e25e',
  },
  {
    id: 'p2',
    title: 'El Juego de la Música',
    description: 'Juego de estrategia para amantes de la teoría musical.',
    price: '25.000 CLP',
    image: 'https://via.placeholder.com/300x200.png?text=Juego+Música',
    flowLink: 'TU_LINK_DE_FLOW_AQUI',
  },
];

export async function GET() {
  return NextResponse.json(PRODUCTS);
}