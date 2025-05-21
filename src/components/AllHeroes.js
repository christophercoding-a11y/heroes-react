import HeroCard from "./HeroCard"
const AllHeroes =({ heroes })=> {

    const heroCardComponents = heroes.map(hero => {
        return (
            <HeroCard 
                key={hero.hero_id}
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