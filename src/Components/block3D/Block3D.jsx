import styles from './Block3D.module.css';
import '../../App.css';

const Block3D = () => {

    const first = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (a.classList.contains('largeVideoStyle') === false) {
            a.classList.add('largeVideoStyle')
            b.classList.remove('largeVideoStyle')
            c.classList.remove('largeVideoStyle')
            v.classList.remove('largeVideoStyle')
            n.classList.remove('largeVideoStyle')
            m.classList.remove('largeVideoStyle')
        } else { a.classList.remove('largeVideoStyle') }
    }

    const second = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (b.classList.contains('largeVideoStyle') === false) {
            b.classList.add('largeVideoStyle')
            a.classList.remove('largeVideoStyle')
            c.classList.remove('largeVideoStyle')
            v.classList.remove('largeVideoStyle')
            n.classList.remove('largeVideoStyle')
            m.classList.remove('largeVideoStyle')
        } else { b.classList.remove('largeVideoStyle') }
    }

    const third = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (c.classList.contains('largeVideoStyle') === false) {
            c.classList.add('largeVideoStyle')
            a.classList.remove('largeVideoStyle')
            b.classList.remove('largeVideoStyle')
            v.classList.remove('largeVideoStyle')
            n.classList.remove('largeVideoStyle')
            m.classList.remove('largeVideoStyle')
        } else { c.classList.remove('largeVideoStyle') }
    }

    const fourth = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (v.classList.contains('largeVideoStyle') === false) {
            v.classList.add('largeVideoStyle')
            a.classList.remove('largeVideoStyle')
            b.classList.remove('largeVideoStyle')
            c.classList.remove('largeVideoStyle')
            n.classList.remove('largeVideoStyle')
            m.classList.remove('largeVideoStyle')
        } else { v.classList.remove('largeVideoStyle') }
    }

    const fifth = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (n.classList.contains('largeVideoStyle') === false) {
            n.classList.add('largeVideoStyle')
            a.classList.remove('largeVideoStyle')
            b.classList.remove('largeVideoStyle')
            c.classList.remove('largeVideoStyle')
            v.classList.remove('largeVideoStyle')
            m.classList.remove('largeVideoStyle')
        }
        else { n.classList.remove('largeVideoStyle') }
    }

    const sixth = () => {
        let a = document.getElementById('first')
        let b = document.getElementById('second')
        let c = document.getElementById('third')
        let v = document.getElementById('fourth')
        let n = document.getElementById('fifth')
        let m = document.getElementById('sixth')
        if (m.classList.contains('largeVideoStyle') === false) {
            m.classList.add('largeVideoStyle')
            a.classList.remove('largeVideoStyle')
            b.classList.remove('largeVideoStyle')
            c.classList.remove('largeVideoStyle')
            v.classList.remove('largeVideoStyle')
            n.classList.remove('largeVideoStyle')
        }
        else { m.classList.remove('largeVideoStyle') }
    }
    return (
        <div className={styles.main}>
            <div id='first' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/xRoSDf1CCGk" ></iframe>
                <button className={styles.buttonContents} onClick={first} >Збільшити</button>
            </div>
            <div id='second' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/AG0gecHyVPk" ></iframe>
                <button className={styles.buttonContents} onClick={second} >Збільшити</button>
            </div>
            <div id='third' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/oCY-oRSa8rY" ></iframe>
                <button className={styles.buttonContents} onClick={third} >Збільшити</button>
            </div>
            <div id='fourth' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/2g8s8ZWVuRM" ></iframe>
                <button className={styles.buttonContents} onClick={fourth} >Збільшити</button>
            </div>
            <div id='fifth' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/4DRLHvWzEes" ></iframe>
                <button className={styles.buttonContents} onClick={fifth} >Збільшити</button>
            </div>
            <div id='sixth' className={styles.listitem}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/VfuPDOisrjM" ></iframe>
                <button className={styles.buttonContents} onClick={sixth} >Збільшити</button>
            </div>
        </div >
    )
}

export default Block3D;