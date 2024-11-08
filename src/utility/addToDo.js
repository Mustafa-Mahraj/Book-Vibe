import { toast } from "react-toastify";

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
        toast.error('This book already exists in the read list', {
            position: "top-center",
            autoClose: 2000
        })
    }
    else {
        storedList.push(id)
        const storedListSrt = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListSrt)
        toast.success('This book is added to the book list', {
            position: "top-center",
            autoClose: 2000
        })
    }
}

const getStoredWishList = () => {
    const storedWishListSrt = localStorage.getItem('wish-list');
    if (storedWishListSrt) {
        const storedWishList = JSON.parse(storedWishListSrt);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storedWishList = getStoredWishList()
    if (storedWishList.includes(id)) {
        toast('This book already exists in the read list')
    }
    else {
        storedWishList.push(id)
        const storedWishListSrt = JSON.stringify(storedWishList);
        localStorage.setItem('read-list', storedWishListSrt)
    }
}


export { addToStoreReadList, addToStoreWishList, getStoredReadList }