'use client';
import AddUserForm from "./addUser";
import UpdateUserForm from "./UpdateUser";


export default function Form (){

const flag = false;


return(

    <div className="container mx-auto py-2">
        {flag ? <AddUserForm/> : <UpdateUserForm/>}
        </div>

 );
}
