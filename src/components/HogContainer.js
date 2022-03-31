import { useState } from "react";
import HogTile from "./HogTile"

function HogContainer({hogs}){
    
    const [myHogs,setMyHogs]=useState(hogs)
    const [filteredByGreased, setFilteredByGreased] = useState(false)
    const [sortedByName, setSortedByName] = useState(false)
   

    function handleFilter(e){
        setFilteredByGreased(!filteredByGreased)
        if(e.target.checked===true){
            let filteredHogs=myHogs.filter(hog=>{
                return hog.greased===true
            })
            setMyHogs(filteredHogs)
        }
        else{
            setMyHogs(hogs)
        }
        
    }

    function handleSort(e){
        setSortedByName(!sortedByName)
        

        if (e.target.checked){
            let sortedHogs = myHogs.sort((a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            })
            setMyHogs(sortedHogs)
        }
        else
            setMyHogs(hogs)
        
    }


    

    return(
        <div>
            <div> Only greased: <input onClick={handleFilter} type="checkbox" id="filter"></input></div>
            <div> Sort by name: <input onClick={handleSort} type="checkbox" id="sort"></input></div>
            {myHogs.map(hog => <HogTile key={hog.name} hog={hog}/> )}
        </div>
        
    )
}

export default HogContainer;