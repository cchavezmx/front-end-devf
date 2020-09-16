import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function HolaMundo() {
    const { setNombre } = useContext(AuthContext)

    return (
        <div>
            <input
            onChange = {(e) => {setNombre(e.target.value)}}
            type="text" 
            aria-label="Como te llamas"
            ></input>
        </div>
    )
}

export default HolaMundo
