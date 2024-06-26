import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import LogoMenu from './LogoMenu.png'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logoH} src={LogoMenu} alt="Logo" />
            <nav className={styles.nav}>
                <Link className={styles.linkHome} to="/">
                    HOME
                </Link>
                <Link className={styles.linkVideo} to="/pages/novovideo">
                    NOVO VÍDEO
                </Link>
            </nav>
        </header>
    )
}

export default Header
