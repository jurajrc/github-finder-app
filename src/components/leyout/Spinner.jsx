import React from 'react'
import spinner from './assets/spinner.gif'
import styled from 'styled-components'

const Spinner = () => {
  return (
    <StyleSpinner>
        <img src={spinner} alt="Loading..." />
    </StyleSpinner>
  )
}
const StyleSpinner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 180px;
        height: auto;
    }
`

export default Spinner