import styles from './animalList.module.css'
import { animalsByPage } from '../../data/data'
import { getImgUrl } from '../../utils/function'

const AnimalList = ({ currentPage }) => {
    const animalToShow = animalsByPage[currentPage]

    return (
        <div className={styles.animalListContainer}>
            <div className={styles.animalListTitle}>
                <h2>This is <span>{currentPage}</span> page!</h2>
            </div>
            <div className={styles.animalList}>
                {animalToShow.map((animal, index) => (
                    <div className={styles.animalListItems} key={index}>
                        <img src={getImgUrl(`${animal.img}`)} alt="" height={300}/>
                        <h3>{animal.name}</h3>
                        <p><strong>Group:</strong> {animal.group}</p>
                        <p><strong>Lifespan:</strong> {animal.lifespan}</p>
                        <a href={`/${animal.group}/${animal.name}`}>Read More!</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimalList