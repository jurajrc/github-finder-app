import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import styled from 'styled-components'

const Alert = () => {
    const {alert} = useContext(AlertContext)

  return alert !== null && (
      <StyleAlert>
            {alert.type === 'error' && (
                <svg
                    fill='red'
                    viewBox='0 0 24 24'
                    className='w-6 h-6 stroke-current mr-3'
                >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                ></path>
                </svg>
            )}
          <p><strong>{alert.msg}</strong></p>
      </StyleAlert>
  )
}
const StyleAlert = styled.div`
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    margin-left: 1em;
    svg {
        width: 20px;
        height: 20px;
    }
    p {
        margin: .6em 0.5em;
    }
    /* position: absolute;
    top: -3em;
    left: 0; */
`

export default Alert