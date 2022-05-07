import { createContext, useReducer } from "react";
import githubReducer from "./GidhubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Clear state users
    const clearUsers = () => dispatch({type: 'CLEAR_USERS'})



     // get singer user
    const getUser = async (login) => {
        dispatch({ type: 'SET_LOADING' })

        
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            //console.log(data);
            dispatch({
                type: 'GET_USER',
                payload: data,
            })

        }
    }

     // get users repos
     const getUserRepos = async (login) => {
        dispatch({ type: 'SET_LOADING' })

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        //console.log(data);
        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }

    return <GithubContext.Provider value={{
        //users: state.users,
        //loading: state.loading,
        //user: state.user,
        //repos: state.repos,
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext