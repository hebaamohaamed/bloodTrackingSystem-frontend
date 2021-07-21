
export const FilterCol2 = ({ column }) => {
    const {filterValue2, setFilter2 } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue2 || ''} onChange={(e) => setFilter2(e.target.value)} placeholder="Filter Column" />
         </span>
     )
}
