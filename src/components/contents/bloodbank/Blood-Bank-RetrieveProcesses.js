import {useTable, useFilters} from 'react-table'
import Data from './Blood-Bank-RetrieveProcessesData.json'
import {COLUMNS} from './Blood-Bank-RetrieveProcessesColumns'
import { useMemo } from 'react'
import BloodBankHeader from '../../headers/bloodbank'

export const BloodBankRetrieveProcesses = () =>{
	
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
			<BloodBankHeader/>
	<main class="py-4">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    All Processes
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
							<th style={{paddingTop: "5.8px"}}><br></br><br></br>Track</th>
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
								<td><a href="/" style={{color: "#C31313"}}>track</a></td>
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

export default BloodBankRetrieveProcesses;