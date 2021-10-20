// App.js
import React from 'react'
import { useAlert } from 'react-alert'

const Alert = ({message}) => {
    const alert = useAlert()

    return (
        <button
            onClick={() => {
                alert.show(message)
            }}
        >
            Show Alert
        </button>
    )
}

export default Alert