import React, { useState } from 'react'

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="title" onClick={() => setIsOpen(!isOpen)}>{props.title}</div>
            {
                isOpen && (
                    <div className="content">
                        {props.children}
                    </div>
                ) 
            }

        </div>
    )
}
