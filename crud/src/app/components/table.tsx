import { FiPlusSquare } from "react-icons/fi";
import { FiTrash2,FiEdit } from "react-icons/fi";
import { useReducer, useState, useEffect } from "react";

import data from "../database/data.json";


interface FormState {
    [key: string]: string;
}

const formReducer = (state: FormState, event: React.ChangeEvent<HTMLInputElement>) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    };
}

const handleDelete = async (id: number) => {
    try {
        const response = await fetch('/api/addProduct', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            console.log('Elemento eliminado correctamente');
            // Actualizar el estado local eliminando el elemento
        } else {
            console.error('Error al eliminar el elemento');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud de eliminación:', error);

    }
}
export default function Table (){
return (

 <table className="min-w-full table-auto ">
    <thead >
        <tr className="bg-slate-800 ">
            <th className="px-16  py-2 ">
                <span className="text-gray-400">Producto</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-gray-400">Cantidad</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-gray-400">Precio</span>
            </th>
            
            <th className="px-16 py-2">
                <span className="text-gray-400">Fecha de importe</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-gray-400">Status</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-gray-400">Acciones</span>
            </th>
        </tr>
    </thead>
    <tbody className="bg-slate-200">
        {
           data.map((obj,i)=> <Tr{...obj}key={i}/> ) 
        }


    </tbody>
 </table>
);
}


interface Product {
    id: number;
    name: string;
    cantidad: number;
    precio: number;
    date: string;
    status: string;
  }
  
  interface TrProps {
    id: number;
    name: string;
    cantidad: number;
    precio: number;
    date: string;
    status: string;
  }
  
  const Tr: React.FC<TrProps> = ({ id, name, cantidad, precio, date, status }) =>  {

    return(
<tr>
        <td className=" border-l border-l-full px-16 py-2 flex flex-row items-center "> 
            <img src='#' alt=''/>
            <span className="text-center items-center ml-2 font-semibold">{name || "Desconocido"}</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span>{cantidad || "Desconocido"}</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span>${precio || "Desconocido"}</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span>{date || "Desconocido"}</span>
        </td>
        <td className="px-16 py-2  text-center items-center"> 
            <button title="status" name="estado" className="cursor"></button><span className={`cursor ${status === "Inactive" ? "bg-red-600 py-1 px-5 rounded-full text-white " : "bg-green-600 py-1 px-5 rounded-full text-white"}`}>
                {status}</span>
        </td>

        <td className="px-16 py-2 flex justify-around "> 
            <button title="edit" name="edit" className="cursor"><FiEdit color="green" size={23}></FiEdit></button>
            <button  title="delete" onClick={() => handleDelete(id)} name="delete" className="cursor"><FiTrash2 color="red" size={23}></FiTrash2></button>
        </td>
    </tr>
    );
}


