import styles from './Header.module.css';


const Header = () => {

    const copyPhoneNumber = () => {
        alert('телефон скопійовано')
    }

    return (
        <header>
            <div className={styles.head}>
                <a href='mailto:vushneve23@gmail.com'></a>
                <h1 className={styles.phone} href="tel:0637101672" onClick={copyPhoneNumber}>063-710-16-72</h1>
            </div>
        </header >
    )
}

export default Header