import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserItem = ( {user: {login, avatar_url}} ) => {
  return (
    <StyleUser className='card'>
        <div className="row">
            <div className="avatar">
                <div className="image">
                    <img src={avatar_url} alt="avatar" />
                </div>
            </div>
                <div className="title">
                    <h3>{login}</h3>
                    <Link to={`/user/${login}`}>
                        Visit Profile
                    </Link>
                </div>
        </div>
    </StyleUser>
  )
}
const StyleUser = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    margin: .5em;
    box-shadow: 0px 3px 5px 0px #000;
    border-radius: .4em .4em .8em .8em;

    .row {
        display: flex;
        align-items: center;

        .image {
            border-radius: 50%;
            width: 80px;
            height: 80px;
            overflow: hidden;
            img {
                width: 100%;
                height: auto;
            }
        }
        .title {
            margin-left: 1em;
            a {
                color: rgba(255, 255, 255, 0.7);
                padding-top: .4em;
            }
        }
    }
`

export default UserItem