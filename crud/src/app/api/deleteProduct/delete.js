import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server'; 

export async function DELETE(req) {
  try {
    const { id } = await req.json(); 

    const filePath = path.join(process.cwd(), 'src/app/database/data.json');
    if (!fs.existsSync(filePath)) {
      throw new Error('Database file not found');
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileContents);

    const updatedProducts = products.filter(product => product.id !== id);

    if (products.length === updatedProducts.length) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    fs.writeFileSync(filePath, JSON.stringify(updatedProducts, null, 2));

    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
