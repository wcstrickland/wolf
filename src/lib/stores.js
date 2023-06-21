import  { writable } from 'svelte/store';

export const currentPage = writable("home")

export const setCurrentPage = (pg) => {
    currentPage.update(p => pg) 
    window.scroll(0,0)
}