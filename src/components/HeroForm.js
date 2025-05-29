const HeroForm =(props)=> {

    return(
        <main className="main" id="heroFormMain">
            <div className="container">
                <form className="hero-form form" onSubmit={ props.handleClick }>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="heroName" className="form-label">Hero Name</label>
                            <input 
                                id="heroName" 
                                type="text"
                                className="form-control" 
                                name="hero_name"
                                value={props.formData.hero_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                                id="firstName" 
                                type="text"
                                className="form-control" 
                                name="first_name"
                                value={props.formData.first_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                                id="lastName" 
                                type="text"
                                className="form-control" 
                                name="last_name"
                                value={props.formData.last_name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="alias" className="form-label">Alias</label>
                            <input 
                                id="alias" 
                                type="text"
                                className="form-control" 
                                name="alias"
                                value={props.formData.alias}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="placeOfOrigin" className="form-label">Place of Origin</label>
                            <input 
                                id="placeOfOrigin" 
                                type="text"
                                className="form-control" 
                                name="place_of_origin"
                                value={props.formData.place_of_origin}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="firstApp" className="form-label">First Appearance</label>
                            <input
                                id="firstApp"
                                type="number"
                                className="form-control"
                                name="first_app"
                                min="1900"
                                max="2050"
                                step="1"
                                value={props.formData.first_app}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <div className="alignment-box">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="alignment"
                                    value="HERO"
                                    id="heroAligment"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label">Hero</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    value="VILLAIN"
                                    name="alignment"
                                    id="villainAligment"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label">Villain</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    value="ANTIHERO"
                                    name="alignment"
                                    id="antiheroAligment"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label">Antihero</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row button-row">
                    <div className="col">
                        <button className="btn btn-dark">Add Hero</button>
                    </div>
                    </div>
                </form>
            </div>
        </main>
    )

}

export default HeroForm