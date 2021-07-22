import {useTable, useFilters} from 'react-table'
import Data from './Supervision-RetrieveBloodBagsData.json'
import {COLUMNS} from './Supervision-RetrieveBloodBagsColumns'
import { useMemo } from 'react'
import SuperHeader  from '../../headers/supervision'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const SupervisionRetrieveBloodBags = () =>{
	
	
	const columns = useMemo(()=> COLUMNS, []);
	const data = useMemo(()=> Data, []);

	const tableInstance = useTable({
		columns,
		data,
		},
		useFilters
	)
	const {
		getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		rows, 
		prepareRow 
	}=tableInstance
	return(
		<div>
		<SuperHeader/>
	<main class="py-4 RetrieveAllBloodBags">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    All Bags
                    <br></br>
					<input className="trackBagID" placeholder="Enter the Bag ID you want to view it's history"/>
					<a href="/">
					<i style={{marginLeft:"8px", color:"#C31313"}}  data-toggle="tooltip" title="Press to view history"><FontAwesomeIcon icon={['fa' ,'info-circle']}/></i>
					</a>
				</div>
                <div class="card-body">
                       
		<table {...getTableProps()} >
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column)=>(
									
									<th {...column.getHeaderProps()}>
										<div>{column.canFilter ? column.render('Filter') : null}</div>
										<br></br>
										{column.render('Header')}
										
									</th>
								))
							}
							<th style={{paddingTop: "5.8px", paddingLeft:"50px"}}><br></br><br></br>Track</th>
						</tr>
					))
				}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row=>{
						prepareRow(row)
						return(
							<tr {...row.getRowProps()}>
								{
									row.cells.map(cell => {
										return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									})
								}
								<td><a href="/" style={{color: "#C31313", paddingLeft:"50px"}}>track</a></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
		</div>
            </div>    
            </div>
        </div>
    </div>    
</main>
</div>
	)

}
export default SupervisionRetrieveBloodBags;
