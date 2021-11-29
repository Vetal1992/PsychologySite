import styles from './Nav.module.css'
import Contacts from './contacts/Contacts';
import Vseosvita from './vseosvita/Vseosvita';
import Appointment from './appointment/Appointment';
import Articles from './articles/Articles';

const Nav = () => {
    return (
        <nav>
            <div className={styles.mainClass} >
                <Vseosvita />
                <Appointment />
                <Articles />
                <Contacts />
            </div >
        </nav >
    )
}
export default Nav;