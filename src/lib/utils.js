
export function writeStorage(obj) {
    localStorage.clear()
    for (const key in obj["storage"]) {
            localStorage.setItem(key, obj["storage"][key])
    }
}