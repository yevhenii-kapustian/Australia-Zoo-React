import styles from './animalDetails.module.css'
import { useParams } from 'react-router-dom'
import { animalsByPage } from '../../data/data'
import { getImgUrl } from '../../utils/function'

const AnimalDetails = () => {
    const { group, name } = useParams()
    const animal = animalsByPage[group]?.find(a => a.name === name)

    return(
        <div className={styles.animalDetails}>
            <img src={getImgUrl(animal.img)} alt={animal.name} height={300} />
            <h2>{animal.name}</h2>
            <p><strong>Group:</strong> {animal.group}</p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Food:</strong> {animal.food}</p>
            <p><strong>Description:</strong> {animal.description}</p>
            <p><strong>Length:</strong> {animal.length}</p>
            <p><strong>Weight:</strong> {animal.weight}</p>
            <p><strong>Found:</strong> {animal.found}</p>
            <a href="/">Home</a>
            <a href={`/${animal.group}`}>Back</a>
     </div>
    )
}

export default AnimalDetails