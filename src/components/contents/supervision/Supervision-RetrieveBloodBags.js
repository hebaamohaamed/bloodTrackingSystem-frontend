import {useTable, useFilters} from 'react-table'
import Data from './Supervision-RetrieveBloodBagsData.json'
import {COLUMNS} from './Supervision-RetrieveBloodBagsColumns'
import { useMemo } from 'react'
import SuperHeader  from '../../headers/supervision'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import BTable from 'react-bootstrap/Table';


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
				
				</div>
                <div class="card-body">
                       
		<BTable bordered hover size="sm" {...getTableProps()} >
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()} >
							{headerGroup.headers.map((column)=>(
									
									<th {...column.getHeaderProps()}>
										<div>{column.canFilter ? column.render('Filter') : null}</div>
										<br></br>
										{column.render('Header')}
										
									</th>
								))
							}
						
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
								
							</tr>
						)
					})
				}
			</tbody>
		</BTable>
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
