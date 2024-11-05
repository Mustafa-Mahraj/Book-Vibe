import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utility/addToDo";
import ReadBook from "../readBook/ReadBook";

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(()=> {
        const storedReadListStr = getStoredReadList()
        const storedReadList = storedReadListStr.map(id => parseInt(id))

        // console.log(storedReadListStr, allBooks, storedReadList)

        const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId))

        setReadList(readBookList);
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto">
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <span className="text-2xl font-semibold ml-2">Books I read : {readList.length}</span>
                    {
                        readList.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    My wish list
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;