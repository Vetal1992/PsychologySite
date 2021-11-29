import styles from './Footer.module.css'
import skypeIcon from '../../media/skype.png'
import phoneIcon from '../../media/phone.png'

const Footer = () => {
    return (
        <footer>
            <div className={styles.mainFooter}>
                <div className={styles.skypePhone}>
                    <div className={styles.footerNumber}>
                        <img src={phoneIcon} alt="" />
                        <a href="tel:+38 (096) 771 21 38">+38 (096) 771 21 38</a>
                    </div>
                    <div className={styles.footerSkype}>
                        <img src={skypeIcon} alt="" />
                        <a href="skype: psicholog-kiev">psicholog-kiev</a>
                    </div>
                </div>
                <div className={styles.qrCode}>
                    <img src='https://chart.googleapis.com/chart?cht=qr&chl=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A%D0%A7%D0%B5%D1%80%D0%BD%D0%B8%D1%88%3B%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0%0AFN%3A%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B8%D1%88%0AORG%3A%0ATITLE%3A%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%0AADR%3A%3B%3B%3B%3B%3B%3B%0ATEL%3BWORK%3BVOICE%3A%0ATEL%3BCELL%3A0967712138%0ATEL%3BFAX%3A%0AEMAIL%3BWORK%3BINTERNET%3Amirrada711%40ukr.net%0AURL%3A%0AEND%3AVCARD%0A&chs=180x180&choe=UTF-8&chld=L|2' alt='' />
                    <p>Будь ласка, відскануйте цей код, що б додати мій номер до Ваших контактів</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;