import { FiPlusSquare } from "react-icons/fi";
import { FiTrash2,FiEdit } from "react-icons/fi";

export default function Table (){
return (

 <table className="min-w-full table-auto ">
    <thead >
        <tr className="bg-slate-800 ">
            <th className="px-16 py-2 ">
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
    <tr>
        <td className=" border-l border-l-full px-16 py-2 flex flex-row items-center "> 
            <img src='#' alt=''/>
            <span className="text-center  ml-2 font-semibold">COCA</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span>2</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span >$25</span>
        </td>
        <td className="px-16 py-2 text-center items-center"> 
            <span> 06/05/2024</span>
        </td>
        <td className="px-16 py-2  text-center items-center"> 
            <button className="cursor"></button><span className="bg-green-600 py-1 px-5 rounded-full text-white ">Activo</span>
        </td>
        <td className="px-16 py-2 flex justify-around "> 
            <button className="cursor"><FiEdit color="green" size={23}></FiEdit></button>
            <button className="cursor"><FiTrash2 color="red" size={23}></FiTrash2></button>
        </td>
    </tr>
    </tbody>
 </table>
);
}