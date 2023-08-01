import React, {useEffect, useState} from "react";
import './Form.css'
import { useTelegram } from "../components/hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show() 
        }
    }, [country, street, tg.MainButton])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className="Form">
            <h3>Введите ваши данные</h3>
            <input className="input"
             type="input"
             placeholder={"Страна"}
             value={country}
             onChange={onChangeCountry}
             />
            <input className="input"
            type="input" 
            placeholder={"Улица"}
            value={street}
            onChange={onChangeStreet}
            />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form