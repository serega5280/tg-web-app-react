import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import './Header.css'

const Header = () => {
    // const tg = window.Telegram.WebApp
    const {user, inClose} = useTelegram()

    // const inClose = () => {
    //     tg.close()
    //   }
    return (
        <div className="header">
            <button onClick={inClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header 