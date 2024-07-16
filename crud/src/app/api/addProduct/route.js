import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const filePath = path.join(process.cwd(), 'src/app/database/data.json');
    if (!fs.existsSync(filePath)) {
      throw new Error('Database file not found');
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileContents);

    const newProduct = {
      id: products.length + 1,
      ...data
    };

    products.push(newProduct);

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

    return NextResponse.json({ message: 'Product added successfully', product: newProduct }, { status: 200 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
