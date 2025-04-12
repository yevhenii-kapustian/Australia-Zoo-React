import { useState } from 'react'
import styles from './header.module.css'
import { allAnimals } from '../../data/data'
import { DotsThreeCircle } from "@phosphor-icons/react";
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const uniqueAnimals = [...new Set(allAnimals.map(item => item.group))]

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Logo />
      </div>

      <div className={styles.headerLinksDesktop}>
        <Link to="/">Home</Link>
        {uniqueAnimals.map((item, index) => (
          <Link key={index} to={`/${item}`}>{item}</Link>
        ))}
      </div>

      <div className={styles.headerLinksMobile}>
        <DotsThreeCircle size={40} onClick={handleClick} />
        <div className={`${styles.menuMobile} ${showMenu ? styles.show : styles.hide}`}>
          <Link to="/" onClick={handleClick}>Home</Link>
          {uniqueAnimals.map((item, index) => (
            <Link key={index} to={`/${item}`} onClick={handleClick}>{item}</Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
