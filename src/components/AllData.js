import { useState, useEffect } from "react";
import axios from "axios";

import AllDataCard from "./AllDataCard";

const AllData =(props)=> {

    const [ table, setTable] = useState(props.table)
    const [ dataArr, setDataArr] = useState([])
    const [ name, setName ] = useState(props.name)

    useEffect(()=> {

        const url = `http://localhost:3005/api/${table}`

        axios.get(url).then(res => setDataArr(res.data))
    }, [])

    const AllDataCardComponents = dataArr.map(item => {
        return (
            <AllDataCard
                key={dataArr.indexOf(item)}
                table={table}
                data={item}
            />
        )
    })

    return(
        <main className="main" id="AllDataMain">
            <div className="container">
                <h2 className="allData-heading">All {table}</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { AllDataCardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllData