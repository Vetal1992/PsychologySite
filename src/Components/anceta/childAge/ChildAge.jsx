import styles from './ChildAge.module.css'

const ChildAge = ({ ref0_4, ref6_8, ref12_16, refBaby, refChild, refTeenager, addGuestChoise }) => {
    return (
        <div>
            <div className={styles.childAge}>
                <div ref={ref0_4}>
                    <button value='baby' onClick={event => addGuestChoise(event.target.value)} >до 4 років</button>
                </div>
                <div ref={ref6_8}>
                    <button value='children' onClick={event => addGuestChoise(event.target.value)} >6-11 років</button>
                </div>
                <div ref={ref12_16}>
                    <button value='teenager' onClick={event => addGuestChoise(event.target.value)} >12-17 років</button>
                </div>
            </div>
            <p ref={refBaby}>К сожалению не работаю с детьми младше 4 років</p>
            <p ref={refChild}>some text about CHILD</p>
            <p ref={refTeenager}>Some text about teenager problems</p>
        </div>
    )
}

export default ChildAge;