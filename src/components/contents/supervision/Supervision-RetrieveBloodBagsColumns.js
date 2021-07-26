import {FilterCol7} from '../filterBloodBags'
import {FilterCol3} from '../filterBloodBags'
import {Link} from 'react-router-dom'

export const COLUMNS = [
    {
        Header: 'Bag ID',
        accessor: 'DIN',
        Filter: FilterCol7
    },
    {
        Header: 'Blood Type',
        accessor: 'type',
        Filter: FilterCol7
    },
    {
        Header: 'Test Results',
        accessor: 'test',
        Filter: FilterCol7
    },
    {
        Header: 'Capacity',
        accessor: 'mm',
        Filter: FilterCol7
    },
    {
        Header: 'Temprature',
        accessor: 'temperature',
        Filter: FilterCol7
    },
    {
        Header: 'Donor',
        accessor: 'donorID',
        Filter: FilterCol7
    },
    {
        Header: 'Patient',
        accessor: 'patientID',
        Filter: FilterCol7
    },
    {
        Header: 'Owner',
        accessor: 'currentOwner',
        Filter: FilterCol7
    },
    
    {
        Header: 'Date',
        accessor: 'date',
        Filter: FilterCol7
    },
    {
        Header: 'Expired',
        accessor: 'expired',
        Filter: FilterCol7
    }
    ,
    {
        Header: 'Bag History',
        accessor: 'key',
        Cell: e =><Link to={{pathname: "/superVisionbaghistory", data: e.value}} style={{color: "#C31313", paddingLeft:"50px"}}>Show</Link>,
        Filter: FilterCol3
    }
]