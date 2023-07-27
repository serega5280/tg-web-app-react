const tg = window.Telegram.WebApp

export function useTelegram() {
    const inClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }    
    return {
        inClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}