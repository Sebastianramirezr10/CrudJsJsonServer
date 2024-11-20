import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";




/**
 * 
 * @param {String | Number} id 
 * @returns {Promise<User>}
 */



export const getUserById = async (id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    const data = await res.json();
   

        
       const  user =  localhostUserToModel  (data);
            console.log(user)
        return user;   
    
     

     
}
