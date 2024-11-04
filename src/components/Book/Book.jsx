import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName, image, author, rating, tags, category, bookId } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="rounded-lg shadow-lg p-6 border-2">
                <div className="flex justify-center items-center mb-4 bg-gray-200 rounded-lg py-8">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="h-40"
                    />
                </div>
                <div className="flex gap-2 mb-4">
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-green-900">{tag}</button>)
                    }
                </div>
                <h3 className="text-lg font-semibold mb-1">{bookName}</h3>
                <p className="text-sm text-gray-500 mb-2">By: {author}</p>
                <div className='border-t-2 border-dashed'></div>
                <div className='flex justify-between items-center'>
                    <div className='badge badge-outline'>{category}</div>
                    <div className='flex gap-2 mt-2'>
                        <h4 className="text-lg font-bold text-gray-700 mb-2">{rating}</h4>
                        <div className="text-yellow-500 text-xl"><FaRegStar></FaRegStar></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;