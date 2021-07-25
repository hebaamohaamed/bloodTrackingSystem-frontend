
export const FilterCol2 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" />
         </span>
     )
}
export const FilterCol5 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column"  style={{width:"150px"}}/>
         </span>
     )
}
