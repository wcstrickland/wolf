import { writable } from 'svelte/store';
import { push } from 'svelte-spa-router';



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
    push('/')
}
