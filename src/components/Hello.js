import React from 'react'

export default function Hello(props) {
    return (
        <div>
            <h1>Hello {props.name}. I am {props.age} years old</h1>
        </div>
    )
}
