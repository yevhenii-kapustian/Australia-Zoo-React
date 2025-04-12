import styles from './home.module.css'
import { getImgUrl } from '../../utils/function'
import { useEffect } from 'react'

const Home = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage("home")
    }, [setCurrentPage])
    
    return(
        <>
        <div className={styles.homeContainer}>
            <div className={styles.homeImageContainer}>
                <div className={styles.homeImageOpacity}></div>
                <img className={styles.homeImage} src={getImgUrl("home.gif")} alt="home immage" />
            </div>

            <div className={styles.homeWelcomeText}>
                <h1>Welcome to the Home Page</h1>
            </div>
        </div>
        </>
    )
}

export default Home