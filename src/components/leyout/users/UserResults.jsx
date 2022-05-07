import React, { useContext } from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'
import UserItem from './UserItem'
import GithubContext from '../../../context/github/GithubContext'

const UserResults = () => {
    const { users, loading } = useContext(GithubContext)
 

    if (!loading) {
        return (
          <StyleResults>
              {users.map((user, index) => (
                  <UserItem key={index} user={user} />
              ))}
          </StyleResults>
        )
    } else {
        return ( <Spinner /> )
    }
}
const StyleResults = styled.article`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    .card {
        width: 19%;
        margin: .8em 0;
        @media screen and (max-width: 1300px) {
            width: 28%;
        }
        @media screen and (max-width: 1000px) {
            width: 48%;
        }
        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }
`

export default UserResults