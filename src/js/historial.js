export const agregarRegistroAlHistorial = (registro) => {
    let n = localStorage.length;
    localStorage.setItem(n, JSON.stringify(registro));
}