import React, { useState } from 'react'

export function Button() {
    const [counter, changeCounter] = useState(0)
    return (
        <button onClick={() => changeCounter((counter) => counter + 1)}>
            {`I've been clicked ${counter} times`}
        </button>
    )
}
