import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero bg-base-200 lg:p-6 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                    <img
                        src={bannerImg} className="rounded-lg shadow-2xl" />
                    <div className='lg:w-2/5'>
                        <h1 className="text-5xl font-bold mb-6">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;