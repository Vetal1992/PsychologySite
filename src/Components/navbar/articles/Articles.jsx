import styles from './Articles.module.css';
import '../../../App.css'

const Articles = () => {
    const shovArticles = () => {
        let a = document.getElementById('textArticles')
        let b = document.getElementById('headerArticles')
        let c = document.getElementById('textVseosvita')
        let d = document.getElementById('textContacts')
        let f = document.getElementById('textAppointment')
        let g = document.getElementById('headerContacts')
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
            <a id='headerArticles' onClick={shovArticles} className={styles.deepshadow} >
                Статьи
            </a>

        </div>
    )
}

export default Articles;