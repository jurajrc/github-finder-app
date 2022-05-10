import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import React, { useContext,  useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import Spinner from '../components/leyout/Spinner'
import styled from 'styled-components'
import ReposList from '../components/repos/ReposList'
import { getUser, getUserAndRepos } from '../context/github/GithubAction'

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext)

  // posledná hodnota z url pathu
  const params = useParams()

  useEffect(() => {
    const getUserData = async () => {
      dispatch({type: 'SET_LOADING'})
      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
      
      // const userData = await getUser(params.login)
      // dispatch({type: 'GET_USER', payload: userData})

      // const reposData = await getUserRepos(params.login)
      // dispatch({type: 'GET_REPOS', payload: reposData})

    }
    getUserData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.login])

  // destructuring
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  const webBlog = blog?.startsWith('http') ? blog : 'https://' + blog

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <StyleUser className='user'>
        <div className='back-link'>
          <Link to="/">Back To Search</Link>
        </div> 
        
        <div className='header-context'>
            <div className='image'>
              
                <img src={avatar_url} alt='' />
              
              <div className='title-image'>
                <h2 className=''>{name}</h2>
                <p className=''>{login}</p>
              </div>
            </div>

            <div className="header-right">
              <div className="name">
                <h2>{name}</h2>
                <p>{type}</p>
                {hireable && (
                  <p className='hireable' >Hireable</p>
                )}
              </div>
              <div className="bio">
                  <p>{bio}</p>
              </div>
              <div className="github-profile">
                  <a 
                    href={html_url} 
                    target="_blank" 
                    rel='noreferrer'
                    className='btn-profile'
                  >Visit Github Profile</a>
              </div>

              <div className="more-info">

                  {location &&  (
                    <div className="location column">
                      <span>Location</span>
                      <div className="bottom">
                        <p>{location}</p>
                      </div>
                    </div>
                  )}

                  {blog && (
                    <div className="website column">
                      <span>Website</span>
                      <div className="bottom">
                        <a 
                          href={webBlog}
                          target="_blank"
                          rel='noreferrer'
                        >{blog}</a>
                      </div>
                    </div>
                  )}

                  {twitter_username && (
                    <div className="twiter column">
                      <span>Twitter</span>
                      <div className="bottom">
                        <a 
                          href={`https://twitter.com/${twitter_username}`}
                          target="_blank"
                          rel='noreferrer'
                        >{twitter_username}
                        </a>
                      </div>
                    </div>
                  )}

              </div>
            </div>
        </div> 

        <div className="public">
          <div className="followers pub">
              <div className="left">
                <span>Followers</span>
                <h2>{followers}</h2>
              </div>
              <FaUsers style={{color: '#A569BD'}} />
          </div>
          <div className="following pub">
              <div className="left">
                <span>Following</span>
                <h2>{following}</h2>
              </div>
              <FaUserFriends style={{color: '#A569BD'}} />
          </div>
          <div className="rapos pub">
            <div className="left">
                <span>Public Repos</span>
                <h2>{public_repos}</h2>
              </div>
              <FaCodepen style={{color: '#A569BD'}} />
          </div>
          <div className="gists pub">
          <div className="left">
                <span>Public Gists</span>
                <h2>{public_gists}</h2>
              </div>
              <FaStore style={{color: '#A569BD'}} />
          </div>
        </div>

        <ReposList repos={repos} />
      </StyleUser>
    </>
  )
}
const StyleUser = styled.div`
width: 69em;
  .back-link {
    margin: 2em;
    display: block;
    width: 100%;
    padding-left: 1em;
    a {
      font-size: .8rem;
      text-transform: uppercase;
      text-decoration: underline;
    }
  }
  .header-context {
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    .image {
      position: relative;
      min-width: 15em;
      height: 15em;
      @media (max-width: 500px) {
        max-width: 15em;
    }
      

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.4em;
        opacity: .8;
      }
      .title-image {
        position: absolute;
        left: 1em;
        bottom: 2em;
        padding: 0 .5em;
        //background: rgba(0, 0, 0, 0.4);
      }
    }
    .header-right {
      margin: .5em 0em .5em 1em;

      .name {
        display: flex;
        align-items: center;
        p {
          font-size: .7em;
          margin: 0 .4em;
          padding: 0.1em 0.6em;
          color: lightgreen;
          background: rgba(144, 238, 144, 0.2);
          border-radius: 0.6em;
        }
        .hireable {
          color: rgb(147, 182, 231);
          background: rgba(147, 182, 231, 0.2);
        }
      }
      .bio {
        font-size: 0.8em;
        margin: .5em 0;
      }
      .github-profile {
        margin: 1.5em 0;
        a {
          font-size: .8em;
          text-transform: uppercase;
          padding: 0.8em;
          border: 1px solid #fff;
          border-radius: 0.5em;
        }
      }
      .more-info {
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 2px 5px 0px #23252a;
        border-radius: 0.4em;
        @media (max-width: 800px) {
          flex-wrap: wrap;
        }
        
        .column {
          padding: .8em;
          border-left: 1px solid #555;
          width: 33.3%;
          width: min-content;
          span {
            font-size: .7em;
            color: #888;
          }
          p {
            margin-top: .3em;
          }
          p, a {
            font-size: .8em;
            font-weight: 600;
          }
          &:first-child {
            border: none;
          }
        }
      }
    }
  }
  .public {
    width: 100%;
    display: flex;
    box-shadow: 0px 2px 5px 0px #23252a;
    border-radius: 0.4em;
    margin: 2em 0;
    @media (max-width: 600px) {
        flex-wrap: wrap;
      }
    .pub {
      width: 25%;
      min-height: 3em;
      border-left: 1px solid #555;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1em;
      @media (max-width: 600px) {
        width: 50%;
      }

      span {
        font-size: .7em;
        color: #888;
      }
      svg {
        width: 2em;
        height: 2em;
      }

      &:first-child {
            border: none;
          }
      &:nth-child(3) {
        @media (max-width: 600px) {
          border: none;
      }
      }
    }
  }
`

export default User