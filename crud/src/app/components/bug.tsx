import { FiCheck } from "react-icons/fi";


export default function Bug (){
return(

    <div className="succes container mx-auto ">
        <div className=" flex justify-center mx-auto border border-pink-400 bg-pink-500 w-3/6 text-gray-500 text-md my-4 py-2 text-center bg-opacity-5">
                Datos agregados <span className="flex mt-1 mx-1"><FiCheck color="green" size={20}></FiCheck></span> 
        </div>
    </div>
);
    
}