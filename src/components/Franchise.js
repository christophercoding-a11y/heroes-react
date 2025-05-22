import { useState, useEffect } from "react";
import axios from "axios";

const Franchise =()=> {

    const [ franchise, setFranchise] = useState([])

    useEffect(()=> {

        const url = 'http://localhost:3005/api/franchise'

        axios.get(url).then(res => setFranchise(res.data))
    }, [])

    return(
        <main className="main" id="franchiseMain">
            <div className="container">
                <h2 className="franchise-heading">All Franchise</h2>
            </div>
        </main>
    )
}

export default Franchise