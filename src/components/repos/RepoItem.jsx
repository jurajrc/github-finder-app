import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RepoItem = ({ repo }) => {

  const { 
    name, 
    description, 
    html_url, 
    forks, 
    open_issues, 
    watchers_count, 
    stargazers_count,
  } = repo 

  return (
    <StyleRepo>

      <div className="block">
        <h3>
          <a href={html_url}><FaLink />{name}</a>
        </h3>
        <p>{description}</p>

        <div className="line">
          <div className="watchers">
            <FaEye /> <span>{watchers_count}</span>
          </div>
          <div className="watchers green" >
            <FaStar /> <span>{stargazers_count}</span>
          </div>
          <div className="watchers red">
            <FaInfo /> <span>{open_issues}</span>
          </div>
          <div className="watchers yellow">
            <FaUtensils /> <span>{forks}</span>
          </div>
        </div>

      </div>

    </StyleRepo>
  )
}
const StyleRepo = styled.div`
  .block {
    min-width: 90%;
    background: #202832;
    font-weight: 800;
    border-radius: 0.3em;
    margin-bottom: .4em;
    transition: 300ms all ease;
    padding: 1em;
    h3 {
      a {
        font-size: 1rem;
        font-weight: 600;

        svg {
          width: .7em;
          height: .7em;
          margin-right: .5em;
        }
      }
    }
    p{
      font-size: .8em;
      font-weight: 200;
      margin: .2em 0;
    }
    &:hover {
      background: #0D1117;
    }
    .line {
      display: flex;
    }
    .watchers {
      font-size: .8em;
      font-weight: 400;
      width: min-content;
      background: rgba(147,182,231,0.2);
      color: rgb(147,182,231);
      padding: 0.1em .7em;
      margin: .2em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1em;
      vertical-align: baseline;
      svg {
        margin-right: 5px;
        width: 10px;
        height: 10px;
      }
      span {
        margin-top: 1px;
      }
    }
    .green {
      background: rgba(0, 128, 0, 0.2);
      color: green;
    }
    .red {
      background: rgba(255, 0, 0, 0.15);
      color: #fb3a3a;
    }
    .yellow {
      background: rgba(255, 255, 0, 0.1);
      color: #fcfc4a;
    }
  }
`
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem