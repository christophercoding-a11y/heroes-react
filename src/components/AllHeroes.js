import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import axios from "axios"

import HeroCard from "./HeroCard"

const AllHeroes =(props)=> {

    const [ table, setTable ] = useState(props.table)
    const [ heroes, setHeroes] = useState([])
    const [ heading, setHeading ] = useState('')

    const params = useParams()

    useEffect(()=> {
        props.resetData()
    }, [])

    useEffect(()=> {
        setHeading(props.table)
    }, [])

    useEffect(()=> {

        if (table == 'hero') {
            const url = `http://localhost:3005/api/${table}`

            axios.get(url).then(res => setHeroes(res.data))
        } else {
            setHeading(params.endpoint)
            const url = `http://localhost:3005/api/${table}/${table}/${params.endpoint}`

            axios.get(url).then(res => setHeroes(res.data))
        }
    }, [])

    const cardComponents = heroes.map(hero => {
        return (
            <HeroCard
                key={hero.hero_id}
                id={hero.hero_id}
                alias={hero.alias}
                heroName={hero.hero_name || `${hero.first_name} ${hero.last_name}`}
                first_name={hero.first_name}
                last_name={hero.last_name}
                img={hero.imgUrl}
            />
        )
    })



    return (
        <main className="main" id="allHeroesMain">
            <div className="container">
                <h2 className="text-capitalize heroes-heading">{heading}</h2>
                <p className="text-end">
                    <Link to="/heroForm">Add a hero</Link>
                </p>
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
                    { cardComponents }
                </section>
            </div>
        </main>
    )
}

export default AllHeroes