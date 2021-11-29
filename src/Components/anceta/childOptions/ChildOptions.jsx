import styles from './ChildOptions.module.css';

const ChildOptions = ({ refChildPanic, refChildPsichosomat, refChildDepends,
    refChildFob, refChildPostTravmat, refChildPanicBtn, refChildPsichosomatBtn,
    refChildDependsBtn, refChildFobBtn, refChildPostTravmatBtn, addGuestChoise }) => {
    return (
        <div>
            <div className={styles.childOptions}>
                <div className={styles.topButton}>
                    <button ref={refChildPanicBtn} value='childPanic' onClick={event => addGuestChoise(event.target.value)} >Проблеми поведінки, адаптації й соціалізації</button>
                </div>
                <button ref={refChildPsichosomatBtn} value='childPsichosomat' onClick={event => addGuestChoise(event.target.value)} >Психоемоційні розлади, в тому числі агресивність i страхи</button>
                <button ref={refChildDependsBtn} value='childDepends' onClick={event => addGuestChoise(event.target.value)} >Невротичні розлади, панічні атаки</button>
                <button ref={refChildFobBtn} value='childFob' onClick={event => addGuestChoise(event.target.value)} >Проблеми розвитку (особливі освітні потреби)</button>
                <div className={styles.bottomButton}>
                    <button ref={refChildPostTravmatBtn} value='childPostTravmat' onClick={event => addGuestChoise(event.target.value)} >Труднощі, пов’язані з навчанням</button>
                </div>
            </div>
            <p ref={refChildPanic}>Паническая атака у ребенка</p>
            <p ref={refChildPsichosomat}>Психосоматические расстройства у детей</p>
            <p ref={refChildDepends}>Лечение подростковой зависимости</p>
            <p ref={refChildFob}>Детские фобии</p>
            <p ref={refChildPostTravmat}>Посттравматический синдром у ребенка</p>
        </div>
    )
}

export default ChildOptions;