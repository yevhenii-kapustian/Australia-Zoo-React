import { useState } from 'react';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { animalsByPage } from '../../data/data';
import styles from './sidebar.module.css';

const Sidebar = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
    };
    
    const animalsToShow = animalsByPage[currentPage];
    const uniqAnimal = [...new Set(animalsToShow.map(item => item))]

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarList}>
            {uniqAnimal.map((item, index) => (
            <a key={index} href={`/${item.group}/${item.name}`}>{item.name}</a>
            ))}
        </div>

        <div className={styles.sidebarArrow} onClick={handleClick}>
            <ArrowCircleRight
            className={styles.sidebarArrowItem}
            size={50}
            color="grey"
            mirrored={isOpen}
            />
        </div>
    </div>
  );
};

export default Sidebar;