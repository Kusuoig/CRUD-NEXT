import { ChangeEvent, FormEvent, useState } from 'react';
import { BiBrush } from 'react-icons/bi';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    cantidad: '',
    precio: '',
    date: '',
    status: 'inactive',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name,
      cantidad: parseInt(formData.cantidad),
      precio: parseInt(formData.precio),
      date: formData.date,
      status: formData.status,
    };

    try {
      console.log('hola1');
      const response = await fetch('/api/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      console.log('hola2');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('bye');
      const result = await response.json();
      console.log('Product added successfully:', result.product);
    } catch (error: any) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input type="text" onChange={handleInputChange} name="name" className="border py-2 px-6 w-full focus:outline-none" placeholder="NOMBRE DEL PRODUCTO" />
      </div>
      <div className="input-type">
        <input type="text" onChange={handleInputChange} name="cantidad" className="border py-2 px-6 w-full focus:outline-none" placeholder="CANTIDAD" />
      </div>
      <div className="input-type">
        <input type="text" onChange={handleInputChange} name="precio" className="border py-2 px-6 w-full focus:outline-none" placeholder="PRECIO" />
      </div>
      <div className="input-type">
        <input type="date" onChange={handleInputChange} name="date" className="border py-3 px-5 focus:outline-none rounded-md text-slate-700 gap-10" placeholder="FECHA DE IMPORTE" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input type="radio" onChange={handleInputChange} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-slate-500 checked:bg-teal-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" />
          <label htmlFor="radioDefault1" className="inline-block text-slate-700">
            Activo
          </label>
        </div>
        <div className="form-check">
          <input type="radio" onChange={handleInputChange} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none h-4 w-4 border rounded-full border-slate-500 checked:bg-teal-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" />
          <label htmlFor="radioDefault2" className="inline-block text-slate-700">
            Inactivo
          </label>
        </div>
      </div>
      <button type="submit" className="flex justify-center text-md w-2/6 bg-teal-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-pink-700 hover:text-pink-700">
        Update <span className="py-1 px-1"><BiBrush size={18} /></span>
      </button>
    </form>
  );
}
