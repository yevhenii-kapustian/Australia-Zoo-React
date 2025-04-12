import styles from './birds.module.css'
import { useEffect } from 'react'
import AnimalList from '../../components/AnimalList'

const Birds = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage("birds")
    }, [setCurrentPage])

    return(
        <>
        <AnimalList currentPage="birds"/>
        </>
    )
}

export default Birds