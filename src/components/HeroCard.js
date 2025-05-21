const HeroCard =()=> {
    return (
        <div className="col">
            <div className="card">
                <img src="https://placehold.co/50x50"alt="placeholder img" className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">hero name</h3>
                </div>
                <footer className="card-footer">
                    view more
                </footer>
            </div>
        </div>
    )
}

export default HeroCard