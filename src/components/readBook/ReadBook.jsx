import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
    const { bookName, author, category, image, publisher, rating, tags, totalPages, yearOfPublishing, bookId } = book;

    return (
        <div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 border-2 my-4">
                <div className="mr-4">
                    <img
                        src={image} // Replace with the actual image URL
                        alt="Book Cover"
                        className="rounded-md h-52"
                    />
                </div>
                <div className="w-3/4 ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">{bookName}</h2>
                    <p className="text-sm text-gray-600">By: {author}</p>

                    <div className="flex gap-2 my-3">
                        <span className="font-bold">Tag :</span>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-green-900">{tag}</button>)
                        }
                        <span className="ml-4">📅 Year of Publishing: {yearOfPublishing}</span>
                    </div>

                    <div className="flex items-center gap-8 text-gray-500 text-sm mt-2">
                        <span>📚 Publisher: {publisher}</span>
                        <p className="text-gray-500 text-sm">📄 Total Pages : {totalPages}</p>
                    </div>

                    <div className="flex items-center mt-2">
                        <span className="text-blue-500 bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded">Category: {category}</span>
                        <span className="ml-4 text-yellow-600 bg-yellow-100 text-xs font-semibold px-2.5 py-0.5 rounded">Rating: {rating}</span>
                    </div>

                    <Link to={`/books/${bookId}`}><button className="mt-4 bg-green-500 text-white text-sm font-semibold py-1.5 px-4 rounded hover:bg-green-600">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;