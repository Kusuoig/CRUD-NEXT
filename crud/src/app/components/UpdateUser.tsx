'use client';
import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import { GrFormFilter } from "react-icons/gr";
import Succes from "./succes";
import Bug from "./bug";

interface FormEvent {
    target: { name: string; value: string };
}
interface FormState {
    [key: string]: string;
}
const formReducer = (state:FormState,event:FormEvent)=>{
 return{
    ...state,
    [event.target.name]:event.target.value
 
}
}
export default function UpdateUserForm (){

const [formData,setFormData] = useReducer(formReducer,{});

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(Object.keys(formData).length == 0)return console.log("No tengo datos del formulario");
console.log(formData);
}

if(Object.keys(formData).length>0) return <Succes ></Succes>

return(

<form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
    <div className="input-type">
        <input type="text" onChange={setFormData} name='nombre' className="border py-2 px-6 w-full focus:outline-none" placeholder="NOMBRE DEL PRODUCTO"/>
    </div>
    <div className="input-type">
        <input type="text" onChange={setFormData} name='cantidad' className="border py-2 px-6 w-full focus:outline-none" placeholder="CANTIDAD"/>
    </div>
    <div className="input-type">
        <input type="text" onChange={setFormData} name='precio' className="border py-2 px-6 w-full focus:outline-none" placeholder="PRECIO"/>
    </div>
    <div className="box border py-2 px-6 w-full text-white border-white focus:outline-none">
        
    </div>
    <div className="input-type">
        <input type="date" onChange={setFormData} name='fecha' className="border py-3 px-5 focus:outline-none rounded-md text-slate-700 gap-10" placeholder="FECHA DE IMPORTE"/>
    </div>
    
    <div className="flex gap-10 items-center">
    <div className="form-check">
        <input type="radio" onChange={setFormData} value='active' title='status' id='radioDefault1' name='status' className="form-check-input appearance-none rounded-full h-4 w-4 border border-slate-500 checked:bg-teal-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
        <label htmlFor="radioDefault1" className="inline-block text-slate-700">
            Activo
            </label>
    </div>
    <div className="form-check">
        <input type="radio" onChange={setFormData} title='status' value='inactive' id='radioDefault2' name='status' className="form-check-input appearance-none  h-4 w-4 border rounded-full border-slate-500 checked:bg-teal-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
        <label htmlFor="radioDefault1" className="inline-block text-slate-700">
            Inactivo
            </label>
    </div>
    </div>
    <button className=" onChange={setFormData} flex justify-center text-md w-2/6 bg-teal-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-pink-700 hover:text-pink-700 ">
    Update <span className="py-1 px-1"><BiBrush size={18}></BiBrush></span>
    </button>
</form>

 );
}
