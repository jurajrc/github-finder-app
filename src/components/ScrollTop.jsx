import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollTop = () => {

    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }, [pathname])
    
    return (
        null
    )
}

export default ScrollTop