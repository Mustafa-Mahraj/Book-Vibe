import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDo';

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData()

    const book = data.find(book => book.bookId === id)
    const { bookName, author, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    const handleReadMore = (id) => {
        addToStoreReadList(id)
    }

    console.log(book)
    return (
        <div>
            <div className="flex max-w-screen-xl items-center mx-auto p-6 bg-white rounded-lg shadow-lg">
                {/* Book Image */}
                <div className="bg-gray-200 flex justify-center py-10">
                    <img src={image} alt="" className='w-[60%]' />
                   
                </div>

                {/* Book Details */}
                <div className="w-2/3 pl-6">
                    <h2 className="text-2xl font-semibold mb-2">{bookName}</h2>
                    <p className="text-gray-600 mb-2">By: {author}</p>
                    <p className="text-gray-500 mb-4">{category}</p>

                    {/* Review */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-1">Review:</h3>
                        <p className="text-gray-600 text-sm">{review}</p>
                    </div>

                    {/* Tags */}
                    <div className="mb-4 flex gap-1">
                        <h3 className="text-sm font-medium text-gray-700 mr-2">Tag:</h3>
                        <div className="flex gap-2 mb-4">
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-green-900">{tag}</button>)
                            }
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="text-sm text-gray-700 space-y-1 mb-6">
                        <p><span className="font-medium">Number of Pages:</span> {totalPages}</p>
                        <p><span className="font-medium">Publisher:</span> {publisher}</p>
                        <p><span className="font-medium">Year of Publishing:</span> {yearOfPublishing}</p>
                        <p><span className="font-medium">Rating:</span> {rating}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button onClick={()=> handleReadMore(bookId)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Read More</button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;