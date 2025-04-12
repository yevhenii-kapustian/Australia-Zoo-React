import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

const Layout = ({currentPage}) => {
    return(
        <>
        <Header/>
        <main className={styles.main}>
        <Sidebar currentPage={currentPage} />
            <Outlet />
        </main>
        <Footer/>
        </>
    )
}
export default Layout