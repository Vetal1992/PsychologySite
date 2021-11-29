import styles from './WhoNeedHelp.module.css'

const WhoNeedHelp = ({ ref1, ref2, ref3, ref4, ref5, ref6, addGuestChoise }) => {
    return (
        <div >
            <div className={styles.myImg}>
                <button ref={ref1}
                    value='adultMen'
                    onClick={event => addGuestChoise(event.target.value)} >
                    Для мене
                </button>
                <button ref={ref2}
                    value='child'
                    onClick={event => addGuestChoise(event.target.value)} >
                    Для дитини
                </button>
                <button ref={ref3}
                    value='friend'
                    onClick={event => addGuestChoise(event.target.value)} >
                    Для дорослого
                </button>
            </div>
            <div className={styles.variableOfChoice}>
                <p ref={ref5} >Вчасна підтримка дитини дає можливість легко вирішувати виховні задачі і насолоджуватися батьківством</p>
                <p ref={ref4} >В дорослому житті кожен з нас зустрічається з сумнівами, тривогами, складними ситуаціями. Саме в таких ситуаціях психолог підтримає Вас</p>
                <p ref={ref6} >Наші близькі, потрапивши в скруту, ускладнюють життя не лише собі. Саме тому, допомагаючи близьким, ми полегшуємо життя собі. Звертайтеся</p>
            </div>
        </div >
    )
}

export default WhoNeedHelp;