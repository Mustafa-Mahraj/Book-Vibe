import { json } from "react-router-dom";

const getStoredReadList = () => {
    const storedListSrt = localStorage.getItem('read-list');
    if (storedListSrt) {
        const storedList = JSON.parse(storedListSrt);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoredReadList()
    if (storedList.includes(id)) {
        alert(id + ' already exists in the read list')
    }
    else {
        storedList.push(id)
        const storedListSrt = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListSrt)
    }
}

export { addToStoreReadList }