
export const FilterCol2 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Search Here" style={{marginTop:"20px"}} />
         </span>
     )
}
export const FilterCol5 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Search Here" />
         </span>
     )
}
