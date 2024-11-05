import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utility/addToDo";
import ReadBook from "../readBook/ReadBook";

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [sortBy, setSortBy] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadListStr = getStoredReadList()
        const storedReadList = storedReadListStr.map(id => parseInt(id))

        // console.log(storedReadListStr, allBooks, storedReadList)

        const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId))

        setReadList(readBookList);
    }, []);

    const handleSort = (sortType) => {
        setSortBy(sortType)
        if (sortType === 'Ratings') {
            const sortReadList = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortReadList);
        }
        if(sortType === 'No of pages'){
            const sortReadList = [...readList].sort((a, b) => b.totalPages - a.totalPages)
            setReadList(sortReadList);
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="dropdown mb-4">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-300 flex justify-center">
                    {
                        sortBy ? `Sort by : ${sortBy}` : 'Sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>Total pages</a></li>
                </ul>
            </div>
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