import styles from './Footer.module.css'
import LogoFooter from '../../assets/LogoFooter.png'

function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <img src={LogoFooter} alt="AluraFlix" className="logo" />
                <span>&copy; 2024 - Pedro Zeferino da Silva</span>
            </div>
        </footer>
       
    )
}

export default Footer
