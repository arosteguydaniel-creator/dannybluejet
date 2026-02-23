export const dynamic = 'force-static';

import { NextResponse } from 'next/server';
import { productos } from '@/lib/productos';

export { type Producto } from '@/lib/productos';

export async function GET() {
  return NextResponse.json(productos);
}
