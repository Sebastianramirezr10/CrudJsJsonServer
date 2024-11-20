import { User } from "../models/user";
import { loadUsersByPage } from "../uses-cases/load-users-by-page"


const state = {

    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {

const nextPage = state.currentPage +1;
const users = await loadUsersByPage(nextPage)
//const users = await loadUsersByPage(state.currentPage + 1)
console.log(users)

if (users.length === 0) {
    return; 
}
    
    state.currentPage += 1
    state.users = users
    

    
}





const loadPreviousPage = async () => {
    if(state.currentPage <= 1){
        return};
    const users = await loadUsersByPage(state.currentPage - 1)
    state.currentPage -= 1;
    state.users = users;
}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = (updatedUser) => {
    let  wasFound = false;
        state.users = state.users.map (user =>{
            if(user.id === updatedUser.id){
                wasFound = true;
                return updatedUser;
            }
            return user;
        });
 // Si el usuario no fue encontrado y la cantidad de usuarios es menor que 10, agregarlo
        if(state.users.length < 10 && !wasFound){
            state.users.push(updatedUser)
        }
}


// Recargar la página actual
const reloadPage = async () => {

  const users = await loadUsersByPage(state.currentPage )

    if (users.length === 0) return;
   
    state.users = users
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {Users[]}
     */

    getUsers: () => [...state.users],

    /**
     * 
     * @returns  {Number}
     */

    getCurrentPage: () => state.currentPage,

}