import styles from './Anketa.module.css'
import Circle from '../animation/Circle';
import AnketaBody from './AnketaBody';

const Anketa = () => {
    return (
        <div className={styles.main} >
            <Circle />
            <AnketaBody />
        </div>
    )
}

export default Anketa;