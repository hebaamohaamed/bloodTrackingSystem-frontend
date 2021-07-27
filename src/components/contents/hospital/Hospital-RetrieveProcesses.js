import {useTable, useFilters} from 'react-table'
import Data from './Hospital-RetrieveProcessesData.json'
import {COLUMNS} from './Hospital-RetrieveProcessesColumns'
import { useMemo } from 'react'
import HospitalHeader from '../../headers/hospital'
import BTable from 'react-bootstrap/Table';


export const HospitalRetrieveProcesses = () =>{
	
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
			<HospitalHeader/>
			
			<main className="py-4 RetrieveAllBloodBags">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    All Processes
                </div>
                <div className="card-body">
                <h6 style={{color:"darkorange", float:"left"}}><b>Note: you can search the columns from the input bars</b></h6>       
		<BTable bordered hover size="sm" {...getTableProps()} >
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

