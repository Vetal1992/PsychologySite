import logo from '../../media/mainLogo.jpg';
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div >
            <img className={styles.logo} src={logo} alt='' ></img>
        </div>
    )
}

export default Logo;