import styles from './Vseosvita.module.css';
import '../../../App.css';

const Vseosvita = () => {

    const shovVseosvita = () => {
        let a = document.getElementById('textVseosvita')
        let b = document.getElementById('headerVseosvita')
        let c = document.getElementById('textArticles')
        let d = document.getElementById('textContacts')
        let f = document.getElementById('textAppointment')
        let g = document.getElementById('headerContacts')
        let h = document.getElementById('headerAppointment')
        let j = document.getElementById('headerArticles')
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
            <a id='headerVseosvita' onClick={shovVseosvita} className={styles.deepshadow} >
                Черниш Oлена на ВСЕОСВІТА
            </a>
            {/* <div className={styles.vseosvitaPage} id='textVseosvita' style={{ display: 'none', fontSize: '1vw' }} href="">
                <p>Some fucking text for Vseosvita </p>
                <p>Some text for cool psycholog in Vseosvita</p>
                <p>Some text for something else</p>
            </div> */}
        </div>
    )
}

export default Vseosvita;