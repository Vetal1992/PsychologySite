import logo from '../../media/mainLogo.jpg';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
import styles from './Body.module.css'
import Anketa from '../anceta/Anketa';
import TextVseosvita from '../navbar/vseosvita/TextVseosvita';
import TextContacts from '../navbar/contacts/TextContacts';
import TextArticles from '../navbar/articles/TextArticles';
import TextAppointment from '../navbar/appointment/TextAppointment';
import Block3D from '../block3D/Block3D';
import Logo from './Logo';



const Body = () => {

    return (
        <div>
            <div className={styles.top}>
                <div className={styles.openCompinents}>
                    <TextVseosvita />
                    <TextAppointment />
                    <TextArticles />
                    <TextContacts />
                </div>
                <Logo />
                <Nav />
            </div >
            <div>
                <Block3D />
            </div>
            <div className={styles.mainContent} >
                <Anketa />
                <Footer />
            </div>
        </div>
    )
}

export default Body;