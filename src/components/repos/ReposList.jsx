import React from 'react'
import styled from 'styled-components'
import RepoItem from './RepoItem'

const ReposList = ({ repos }) => {
  return (
    <StyleRepos>
        <h2>Latest Repositories</h2>
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}  />
        ))}
    </StyleRepos>
  )
}
const StyleRepos = styled.div`
    width: 100%;
    padding: 1em 2.5%;
    margin-bottom: 2em;
    box-shadow: 0px 2px 5px 0px #23252a;
    border-radius: 0.4em;
    h2 {
        padding: 0.5em 0 .8em;
    }
`

export default ReposList