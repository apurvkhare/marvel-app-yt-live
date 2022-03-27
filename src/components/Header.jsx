import React from 'react'
import classes from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <h3>Marvellous</h3>
            <input type='search' className={classes.search} />
        </header>
    )
}

export default Header
