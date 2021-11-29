import styles from './Contacts.module.css';
import '../../../App.css'

const TextContacts = () => {
    return (
        <div className={styles.item} >
            <div className={styles.contactsPage} id='textContacts' style={{ visibility: 'hidden', fontSize: '1vw' }} href="">
                <p>Some text for Contacts </p>
                <p>Some text for cool psycholog in Contacts</p>
                <p>Some text for something Contacts</p>
            </div>
        </div>
    )
}

export default TextContacts;
