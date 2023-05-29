import {TypeOptions, toast } from 'react-toastify'



export const notify = (
    description:string, 
    type:TypeOptions,
    icon?: any,


) => {
    toast(description,{
   type,
   position: 'bottom-right',
   autoClose: 9000,
   hideProgressBar: false,
   pauseOnHover: true,
   closeOnClick: false,
   draggable: true,
   theme: 'colored',
   icon,
    })
}