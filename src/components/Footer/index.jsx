import styles from './footer.module.css'
import Logo from '../Logo'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Logo/>
            <h3>Yevhenii</h3>
            <p>Copyright © 2025 Copyright Symbol</p>
        </footer>
    )
}

export default Footer