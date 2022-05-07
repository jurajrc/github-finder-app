import React from 'react'
import styled from 'styled-components'
// components
import UserResults from '../components/leyout/users/UserResults'
import UserSearch from '../components/leyout/users/UserSearch'

const Home = () => {
  return (
    <StyleHome className='home'>
      
        <UserSearch />
        <UserResults />

    </StyleHome>
  )
}
const StyleHome = styled.div`
  width: 100%;
  //display: flex;
 // align-items: center;
  //justify-content: center;
`

export default Home