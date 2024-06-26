import React from 'react'
import styles from './Footer.module.css'
import LogoFooter from './LogoFooter.png'
function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src={LogoFooter} alt="Logo Footer" className={styles.logoF} />
            <p className={styles.text}>&copy; 2024 - Pedro Zeferino da Silva</p>
        </footer>
    )
}

export default Footer
