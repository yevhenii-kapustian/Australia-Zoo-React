import { useEffect } from 'react'
import AnimalList from '../../components/AnimalList'

const Mammals = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage("mammals")
    }, [setCurrentPage])

    return(
        <>
        <AnimalList currentPage="mammals" />
        </>
    )
}

export default Mammals