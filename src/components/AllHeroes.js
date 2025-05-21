import HeroCard from "./HeroCard"
const AllHeroes =({ heroes })=> {

    const heroCardComponents = heroes.map(hero => {
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

    console.log(heroes)

    return (
        <main className="main" id="allHeroesMain">
            <div className="container">
                <h2 className="text-capitalize heroes-heading">all heroes</h2>
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
                    { heroCardComponents }
                </section>
            </div>
        </main>
    )
}

export default AllHeroes