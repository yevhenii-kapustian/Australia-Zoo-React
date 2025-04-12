import styles from './reptiles.module.css'
import { useEffect } from 'react'
import AnimalList from '../../components/AnimalList'

const Reptiles = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage("reptiles")
    }, [setCurrentPage])

    return(
        <AnimalList currentPage="reptiles"/>
    )
}

export default Reptiles