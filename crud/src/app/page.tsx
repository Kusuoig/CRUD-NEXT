import React from 'react';
import { FiPlusSquare } from "react-icons/fi";
import Table from './components/table';
import Form from './components/form';


export default function Home() {
  return (
    <section>
       <main className='py-5 px-5'> 
      <h1 className='text-xl md:text-5xl text-center font-bold py-15'>OLA ODALISSS PRECIOSA, YA VAMOS A VERNOS TE QUIERO BESILLOS</h1>

      <div className='container mx-auto flex justify-between py-5  border-b'>
         <div className="left flex gap-3">
         <button className='flex bg-teal-500 px-4 py-2 text-white hover hover:bg-teal-700 border rounded-md hover:border-gray-500 hover:text-gray-300'>
          Agrega un producto <span className='px-1 flex-auto'><FiPlusSquare size={24}></FiPlusSquare></span> 
         </button>
         </div>
          
          
      </div>
      {/*form colapasble*/}

      <div className="container mx-auto">
            <Form></Form>
          </div>


      {/*table*/}
      <div className='container mx-auto flex'>
      <Table></Table>
      </div>
    </main>
    </section>
   
  );
}
