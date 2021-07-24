export const FilterCol = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column" />
         </span>
     )
}
