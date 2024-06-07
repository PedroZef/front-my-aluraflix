import styles from './Header.module.css'
import LogoMenu from '../../assets/LogoMenu.png'


const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <img src={LogoMenu} alt="AluraFlix" className="logo" />
                <div className={styles.buttons}>
                    <button className={styles.buttonhome}>HOME</button>
                    <button className={styles.buttonvideo}>NOVOVÍDEO</button>
                </div>
            </div>
        </header>
        
        
    )
}
export default Header