import styles from './Vseosvita.module.css';
import '../../../App.css';

const TextVseosvita = () => {
    return (
        <div className={styles.item} >
            <div className={styles.vseosvitaPage} id='textVseosvita' style={{ visibility: 'hidden', fontSize: '1vw' }} href="">
                <p>Some text for Vseosvita Some text for cool psycholog in Vseosvita</p>
                <p>Some text for cool psycholog in Vseosvita</p>
                <p>Some text for something else</p>
            </div>
        </div>
    )
}

export default TextVseosvita;
