import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";




/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */



export const loadUsersByPage = async (page = 1) => {


    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    
    if(!data || !data || data.length === 0){
        return []
    }
        
    
    const users = data.map((localhostUserToModel))

 


   
    /* Si hay usuarios, los mapeamos
    data.data.forEach((el) => { 
      
        users.push(localhostUserToModel(el))
       
        
    });*/

        return users;   
    
     

     
}
