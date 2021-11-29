import React, { Component } from 'react';
import styles from './MessageGenerator.module.css';
import background from "../../media/openedPostmark.png";
import afterClickImage from "../../media/postmark.png"

class MessageGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: {
                to: '',
                body: `Здравствуйте, меня зовут  ${this.props.guestName} . Ищу специалиста, который поможет  ${this.props.guestChoise}. Перезвоните мне пожалуйста по номеру: ${this.props.guestPhone}`
            },
            image: background,
            submitting: false,
            error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
            message: { ...this.state.message, [name]: event.target.value },
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.message)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        error: false,
                        submitting: false,
                        image: afterClickImage,
                        message: {
                            to: '',
                            body: `Здравствуйте, меня зовут ${this.props.guestName}. Ищу специалиста, который поможет  ${this.props.guestChoise}. Перезвоните мне пожалуйста по номеру: ${this.props.guestPhone}`
                        },
                    });
                } else {
                    this.setState({
                        error: true,
                        submitting: false,
                        image: afterClickImage,
                    });
                }

            });

    }

    render() {
        return (
            <div className={styles.main}>
                <form
                    onSubmit={this.onSubmit}
                    className={this.state.error ? 'error sms-form' : 'sms-form'}>
                    <div id='afterSend' style={{ opacity: `0`, display: `none` }} className={styles.afterSend} >
                        Дякую, вашого листа успішно надіслано. Якщо я не зателефоную протягом доби, будь ласка подзвоніть мені:
                        +380667712138
                    </div>
                    <div id='description'>
                        <p><label htmlFor="body">Цей лист згенеровано на основі вашого вибору. Натисніть "НАДІСЛАТИ" і я зателефоную на вказаний Вами номер найближчим часом:</label></p>
                        <div id="image" name='image'>
                            <div className={styles.textareaProperties}>
                                <textarea
                                    name="body"
                                    id="body"
                                    onMouseOver={this.onHandleChange}
                                    value={`Здравствуйте, меня зовут ${this.props.guestName} . Ищу специалиста, который поможет  ${this.props.guestChoise}. Перезвоните мне пожалуйста по номеру: ${this.props.guestPhone}`}
                                    readonly
                                />
                            </div>
                            <button id='thisButton' className={styles.buttonProperties} type="submit" disabled={this.state.submitting}
                                onClick={() => {
                                    var elem1 = document.getElementById('description')
                                    elem1.style.opacity = '0';
                                    elem1.style.position = 'absolute'
                                    elem1.style.animationDuration = '1s'
                                    var elem4 = document.getElementById('afterSend')
                                    elem4.style.opacity = '1';
                                    elem4.style.display = 'block'
                                    // var elem2 = document.getElementById('body')
                                    // elem2.style.opacity = '0';
                                    // var elem3 = document.getElementById('thisButton')
                                    // elem3.style.opacity = '0';
                                    function alertMessage() {
                                        alert('Письмо успешно отправлено, я свяжусь с Вами в ближайшее время')
                                    }
                                    setTimeout(alertMessage, 2500);
                                }} >
                                НАДІСЛАТИ ЛИСТА
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default MessageGenerator;