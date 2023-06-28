import { writable } from 'svelte/store';

export const currentPage = writable("home")

export const setCurrentPage = (pg) => {
    currentPage.update(p => pg)
    window.scroll(0, 0)
}


// create a store that initializes to reflect a section of localstorage or empty object
export const formState = writable(JSON.parse(localStorage.getItem('form'))||{})

export function clearFormState(){
    formState.update(fs => {})
}

export function updateFormState(key, val){
    formState.update(fs => {
        fs[key] = val
        return fs
    })
}

export function setCharacter(character){
    for (const key in character) {
        updateFormState(key, character[key])
    }
    setCurrentPage("home")
}
