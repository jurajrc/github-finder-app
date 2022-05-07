import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <StyleNotFound>
        <h1>Oops!</h1>
        <p>404 - Page not found!</p>
        <Link to='/' >
            <FaHome />
            Back to home
        </Link>
    </StyleNotFound>
  )
}
const StyleNotFound = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 4em;
        margin: 0;
    }
    a {
        padding: 1em 1.5em;
        background: #A435F0;
        border-radius: 0.5em;
        text-align: center;
        svg {
            margin-right: 5px;
        }
    }
`

export default NotFound