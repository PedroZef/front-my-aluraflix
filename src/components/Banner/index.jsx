import styles from './Banner.module.css'
import BannerBG from './BannerBG.png'

function Banner() {
    return (
        <div className={styles.banner}>
            <img src={BannerBG} alt="Logo Banner "/>

        </div>
    )
}

export default Banner