export default function Form (){

return(

<form className="grid lg:grid-cols-2 w-4/6 gap-4">
    <div className="input-type">
        <input type="text" name='nombre' className="border py-2 px-6 w-full focus:outline-none" placeholder="NOMBRE DEL PRODUCTO"/>
    </div>
    <div className="input-type">
        <input type="text" name='cantidad' className="border py-2 px-6 w-full focus:outline-none" placeholder="CANTIDAD"/>
    </div>
    <div className="input-type">
        <input type="text" name='precio' className="border py-2 px-6 w-full focus:outline-none" placeholder="PRECIO"/>
    </div>
    <div className="input-type">
        <input type="text" name='fecha' className="border py-2 px-6 w-full focus:outline-none" placeholder="FECHA DE IMPORTE"/>
    </div>
    <div className="form-check">
        <input type="radio" value='active' id='radioDefault1' name='status' className="form-check-input appearance-none rounded-full h-4 w-4 border border-slate-500 checked:bg-green-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
        <label htmlFor="radioDefault1" className="inline-block text-slate-700">
            Activo
            </label>
    </div>
    <div className="form-check">
        <input type="radio" value='inactive' id='radioDefault2' name='status' className="form-check-input appearance-none  h-4 w-4 border rounded-full border-slate-500 checked:bg-green-500 checked:border-bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
        <label htmlFor="radioDefault1" className="inline-block text-slate-700">
            Inactivo
            </label>
    </div>

    <button className="mt-3 mb-3 flex justify-center text-md w-2/6 bg-teal-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-teal-500 hover:text-teal-500 ">Agregar</button>
</form>

);
}
