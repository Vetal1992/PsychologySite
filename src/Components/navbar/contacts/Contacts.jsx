import styles from './Contacts.module.css';
import '../../../App.css'

const Contacts = () => {
    const shovContacts = () => {
        let a = document.getElementById('textContacts')
        let b = document.getElementById('headerContacts')
        let c = document.getElementById('textVseosvita')
        let d = document.getElementById('textArticles')
        let f = document.getElementById('textAppointment')
        let g = document.getElementById('headerArticles')
        let h = document.getElementById('headerAppointment')
        let j = document.getElementById('headerVseosvita')
        if (a.style.visibility === 'hidden') {
            c.classList.remove('visible')
            c.style.visibility = 'hidden'
            c.classList.add('hide')
            d.classList.remove('visible')
            d.style.visibility = 'hidden'
            d.classList.add('hide')
            f.classList.remove('visible')
            f.style.visibility = 'hidden'
            f.classList.add('hide')
            g.classList.remove('active')
            h.classList.remove('active')
            j.classList.remove('active')


            a.classList.remove('hide')
            a.classList.add('visible')
            b.classList.add('active')
            a.style.visibility = 'visible'
        } else {
            a.style.visibility = 'hidden'
            a.classList.remove('visible')
            a.classList.add('hide')
            b.classList.remove('active');
        }
    }

    return (
        <div className={styles.item} >
            <a id='headerContacts' onClick={shovContacts} className={styles.deepshadowContacts} >
                Контакти
            </a>

        </div>
    )
}

export default Contacts;
