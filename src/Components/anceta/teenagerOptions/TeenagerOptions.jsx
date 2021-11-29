import styles from './TeenagerOptions.module.css'

const TeenagerOptions = ({ refTeenagerCryzis, refTeenagerNevrot, refTeenagerPsyco, refTeenagerPovedinka, refTeenagerEducation,
    refTeenagerIdentification, refTeenagerCryzisBtn, refTeenagerNevrotBtn, refTeenagerPsycoBtn, refTeenagerPovedinkaBtn,
    refTeenagerEducationBtn, refTeenagerIdentificationBtn, addGuestChoise }) => {
    return (
        <div>
            <div className={styles.teenOptions}>
                <div className={styles.topButton}>
                    <button ref={refTeenagerCryzisBtn} value='TeenagerCryzisBtn' onClick={event => addGuestChoise(event.target.value)} >Підліткові кризові явища</button>
                </div>
                <button ref={refTeenagerNevrotBtn} value='TeenagerNevrotBtn' onClick={event => addGuestChoise(event.target.value)} >Невротичні розлади</button>
                <button ref={refTeenagerPsycoBtn} value='TeenagerPsycoBtn' onClick={event => addGuestChoise(event.target.value)} >Психоемоційні розлади</button>
                <button ref={refTeenagerPovedinkaBtn} value='TeenagerPovedinkaBtn' onClick={event => addGuestChoise(event.target.value)} >Поведінкові особливості (різного типу)</button>
                <button ref={refTeenagerEducationBtn} value='TeenagerEducationBtn' onClick={event => addGuestChoise(event.target.value)} >Труднощі, пов’язані з навчанням</button>
                <div className={styles.bottomButton}>
                    <button ref={refTeenagerIdentificationBtn} value='TeenagerIdentificationBtn' onClick={event => addGuestChoise(event.target.value)} >Самовизначення (профілізація старшокласників)</button>
                </div>
            </div>
            <p ref={refTeenagerCryzis}>Підліткові кризові явища</p>
            <p ref={refTeenagerNevrot}>Невротичні розлади</p>
            <p ref={refTeenagerPovedinka}>Психоемоційні розлади</p>
            <p ref={refTeenagerEducation}>Поведінкові особливості (різного типу)</p>
            <p ref={refTeenagerPsyco}>Труднощі, пов’язані з навчанням</p>
            <p ref={refTeenagerIdentification}>Самовизначення (профілізація старшокласників)</p>
        </div>
    )
}

export default TeenagerOptions;