export const FilterCol = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Search" style={{width:"150px", marginRight:"20px"}}/>
         </span>
     )
}
export const FilterCol3 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter2" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter Column"  hidden/>
         </span>
     )
}
export const FilterCol4 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input list="Types" className="filter4" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Blood Type" />
             <datalist>
                <option value="A+" />
                <option value="A-" />
                <option value="B+" />
                <option value="B-" />
                <option value="O+" />
                <option value="O-" />
                <option value="AB+" />
                <option value="AB-" />
             </datalist>
         </span>
     )
}
export const FilterCol7 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="" style={{width:"120px"}}/>
         </span>
     )
}
export const FilterCol9 = ({ column }) => {
    const {filterValue, setFilter } = column
     return(
         <span>
             {' '}
             <input className="filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder="" style={{width:"400px"}} hidden/>
         </span>
     )
}
