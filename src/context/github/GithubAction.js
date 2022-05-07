import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

// get search results
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //     headers: {
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     }
    // })
    // const {items} = await response.json()
    // return items

    // with axios
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

 // get singer user
export const getUser = async (login) => {
    
    // const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //     headers: {
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     }
    // })
    const response = await github.get(`/users/${login}`)

    if(response.status === 404) {
        window.location = '/notfound'
    } else {
        //const data = await response.json()
        return response.data
    }
}
     // get users repos
    export const getUserRepos = async (login) => {

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })

        // const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        //     headers: {
        //         Authorization: `token ${GITHUB_TOKEN}`
        //     }
        // })
        const response = await github.get(`/users/${login}/repos?${params}`)

        //const data = await response.json()
        return response.data
    }

    // ako za vola me dve get requesty naraz
    export const getUserAndRepos = async (login) => {

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })

      const [user, repos] = await Promise.all([
          github.get(`users/${login}`),
          github.get(`users/${login}/repos?${params}`)
      ])
      return { user: user.data, repos: repos.data }
    }