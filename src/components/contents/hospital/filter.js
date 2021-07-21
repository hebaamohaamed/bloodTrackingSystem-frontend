export const FilterCol = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" />
         </span>
     )
}

export const FilterCol2 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" />
         </span>
     )
}

// Hidden
export const FilterCol3 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter3" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" hidden />
         </span>
     )
}

// with drop down list
export const FilterCol4 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
            <input list="Types" className="filter4" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" />
            <datalist id="Types">
                <option value="A+"/>
                <option value="B+"/>
                <option value="O+"/>
                <option value="AB+"/>
                <option value="A-"/>
                <option value="B-"/>
                <option value="O-"/>
                <option value="AB-"/>
            </datalist>
         </span>
     )
}