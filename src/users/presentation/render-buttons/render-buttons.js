import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';

import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton)


    
 // Cargar la siguiente página
    nextButton.addEventListener('click', async () => {
        console.log("Página actual antes de cargar:", usersStore.getCurrentPage());
        await usersStore.loadNextPage();
        
        console.log("Página después de cargar:", usersStore.getCurrentPage());
        currentPageLabel.innerText = usersStore.getCurrentPage();
        
        renderTable(element)
    })


    prevButton.addEventListener('click', async () => {
        
       await usersStore.loadPreviousPage(); // Carga la página anterior si es válida
           
        currentPageLabel.innerText = usersStore.getCurrentPage()
                renderTable(element)
            
              
      
    });

}