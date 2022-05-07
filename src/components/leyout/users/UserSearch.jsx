import React, { useState, useContext } from 'react'
import GithubContext from '../../../context/github/GithubContext'
import AlertContext from '../../../context/alert/AlertContext'
import { searchUsers } from '../../../context/github/GithubAction'
import styled from 'styled-components'
import Alert from '../Alert'

const UserSearch = () => {
    const [text, setText] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handlechange = (e) => setText(e.target.value)
    
    const handleSubmit = async (e) => {
      e.preventDefault()

      if(text === '') {
          setAlert('Please enter something', 'error')
      } else {
        dispatch({type: 'SET_LOADING'})
        const users = await searchUsers(text)
        dispatch({
            type: 'GET_USERS',
            payload: users,
        })

        setText('')
      }
    }

  return (
    <StyleSearch>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Search' 
                    value={text}
                    onChange={handlechange}
                    autoFocus
                />
                <button>Go</button>
                <Alert />
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button onClick={() => dispatch({type: 'CLEAR_USERS'})} >Clear</button>
            </div>
        )}
        
    </StyleSearch>
  )
}
const StyleSearch = styled.div`
    display: flex;
    margin: 2em 0;
    

    form {
        position: relative;
        
        
            input {
                padding: .8em;
                border-radius: 0.5em;
                background: #cecece;
                border: none;
                overflow: hidden;
                width: 18em;
                outline: none;
            }
            button {
                position: absolute;
                top: 0;
                right: -1px;
                bottom: 0;
                width: 6em;
                border: none;
                background: #2F343B;
                color: #fff;
                text-transform: uppercase;
                border-radius: 0 .5em .5em 0;
                cursor: pointer;
            }

       
    }
    button {
        width: 6em;
        padding: 0.78em;
        margin-left: 1em;
        background: transparent;
        border: none;
        border-radius: 0.5em;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        transition: 300ms all ease;
        cursor: pointer;
        &:hover {
            background: #2F343B;
        }
    }
`

export default UserSearch