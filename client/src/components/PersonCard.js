import React from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: <span style={{ color: hairColor }}>{hairColor.charAt(0).toUpperCase() + hairColor.slice(1)}</span></p>
        </div>
    )
}

export default PersonCard;