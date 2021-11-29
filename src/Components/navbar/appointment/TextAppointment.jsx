import styles from './Appointment.module.css';
import '../../../App.css'

const TextAppointment = () => {
    return (
        <div className={styles.item} >
            <div className={styles.appointmentPage} id='textAppointment' style={{ visibility: 'hidden', fontSize: '1vw' }} href="">
                <p>Some fucking text for Appointment </p>
                <p>Some text for cool psycholog in Appointment</p>
                <p>Some text for something Appointment</p>
            </div>
        </div>
    )
}

export default TextAppointment;