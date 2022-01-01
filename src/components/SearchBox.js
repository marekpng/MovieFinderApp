import React from "react"

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4 ">
            <div className="p-3 mb-2 bg-gradient-primary text-white">  

            <input 
            className="form-control"
            placeholder="Type to search..."
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}>
            </input>
            </div>
            
        </div>
    )
}

export default SearchBox
