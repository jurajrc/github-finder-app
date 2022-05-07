import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Navbar = ({ title }) => {
  return (
    <StyleNav>
        <div className="container">
            <div className="content">
                <div className="logo">
                    <FaGithub />
                    <Link to="/" >{title}</Link>
                </div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>

        </div>
    </StyleNav>
  )
}
const StyleNav = styled.nav`
    background: #2f343b;
    padding: 1em 0;
    box-shadow: 0px 2px 13px 1px #000;

    .content {
        display: flex;
        justify-content: space-between;

        .logo {
            display: flex;
            align-items: center;
            a {
                margin-left: 0.5em;
                font-weight: bold;
            }
        }
        .menu {
            a {
                padding:  .4em .6em ;
                margin-left: .4em;
                border-radius: 0.5em;
                text-transform: uppercase;
                &:hover {
                    background: #595c63;
                }
            }
        }
    }
`

export default Navbar