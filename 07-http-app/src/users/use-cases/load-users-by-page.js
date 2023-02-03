


/**
 * 
 * @param {Number} page 
 * @returns
 * 
 */
export const loadUsersByPage = async( page = 1) => {
 // `${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`; http://localhost:3001
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}