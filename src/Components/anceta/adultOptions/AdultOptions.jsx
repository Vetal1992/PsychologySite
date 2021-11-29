import MyButton from "../../button/MyButton";
import styles from './AdultOptions.module.css';

const AdultOptions = ({ refPanicBtn, refPsichosomatBtn, refFamilyBtn, refDependsBtn, refFobBtn, refPostTravmatBtn
    , refPanic, refPsichosomat, refFamily, refDepends, refFob, refPostTravmat, addGuestChoise }) => {
    return (
        <div>
            <div className={styles.adultOptions}>
                <div className={styles.topButton}>
                    <button ref={refPanicBtn} value='panic' onClick={event => addGuestChoise(event.target.value)} >Паническая атака</button>
                </div>
                <button ref={refPsichosomatBtn} value='psichosomat' onClick={event => addGuestChoise(event.target.value)} >Психосоматические расстройства</button>
                <button ref={refFamilyBtn} value='family' onClick={event => addGuestChoise(event.target.value)} >Семейные проблемы</button>
                <button ref={refDependsBtn} value='depends' onClick={event => addGuestChoise(event.target.value)} >Лечение зависимости</button>
                <button ref={refFobBtn} value='fob' onClick={event => addGuestChoise(event.target.value)} >фобии</button>
                <div className={styles.bottomButton}>
                    <button ref={refPostTravmatBtn} value='postTravmat' onClick={event => addGuestChoise(event.target.value)} >посттравматический синдром</button>
                </div>
            </div>
            <p ref={refPanic}>Паническая атака</p>
            <p ref={refPsichosomat}>Психосоматические расстройства</p>
            <p ref={refFamily}>Семейные проблемы</p>
            <p ref={refDepends}>Лечение зависимости</p>
            <p ref={refFob}>фобии</p>
            <p ref={refPostTravmat}>посттравматический синдром</p>
        </div>
    )
}

export default AdultOptions;