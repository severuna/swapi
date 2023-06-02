import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../components/module/Logo/Logo';

const NavBar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);

    return (
        <header className='header row'>
            <Logo />
            <nav className='header-nav row'>
                <Link to='swapi/films' className='header-nav__item'>Films</Link>
                <Link to='swapi/people' className='header-nav__item'>People</Link>
                <Link to='swapi/planets' className='header-nav__item'>Planets</Link>
                <Link to='swapi/species' className='header-nav__item'>Species</Link>
                <Link to='swapi/starships' className='header-nav__item'>Starships</Link>
            </nav>
        </header>
    );
};

export default NavBar;