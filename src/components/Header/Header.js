import {Link} from 'react-router-dom';
import "./Header.css";
import React from 'react';

export default function Header() {
    return (
        <div className='header'>
            <Link to = "/" className='title'>MCQ Test</Link>
            <hr />
        </div>
    )
}
