import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='block md:flex items-center justify-center bg-cyan-700'>
                <p className='my-3 mr-3 text-white text-lg underline underline-offset-8 hover:text-purple-900'> <Link to='/home'> Home </Link> </p>
                <p className='my-3 mr-3 text-white text-lg underline underline-offset-8 hover:text-purple-900'> <Link to='/home'> Reviews </Link> </p>
                <p className='my-3 mr-3 text-white text-lg underline underline-offset-8 hover:text-purple-900'> <Link to='/dashboard'> Dashboard </Link> </p>
                <p className='my-3 mr-3 text-white text-lg underline underline-offset-8 hover:text-purple-900'> <Link to='/bogs'> Blogs </Link> </p>
                <p className='my-3 mr-3 text-white text-lg underline underline-offset-8 hover:text-purple-900'> <Link to='/about'> About us </Link> </p>
            </nav>

        </div>
    );
};

export default Header;