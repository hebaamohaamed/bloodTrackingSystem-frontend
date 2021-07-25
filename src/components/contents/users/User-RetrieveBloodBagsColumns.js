import {FilterCol} from '../filterBloodBags'
import {FilterCol3} from '../filterBloodBags'
import {Link} from 'react-router-dom'
export const COLUMNS = [
    {
        Header: 'Bag ID',
        accessor: 'DIN',
        Filter: FilterCol
    },
    {
        Header: 'Blood Type',
        accessor: 'type',
        Filter: FilterCol
    },
    {
        Header: 'Safe',
        accessor: 'test',
        Filter: FilterCol
    },
    {
        Header: 'Mili',
        accessor: 'mm',
        Filter: FilterCol
    },
    {
        Header: 'Temprature',
        accessor: 'temperature',
        Filter: FilterCol
    },
    {
        Header: 'Date',
        accessor: 'date',
        Filter: FilterCol
    },
    {
        Header: 'Expired',
        accessor: 'expired',
        Filter: FilterCol
    }
    ,
    {
        Header: '',
        accessor: 'key',
        Cell: e =><Link to={{pathname: "/UserTrackingBlood", data: e.value}} style={{color: "#C31313", paddingLeft:"50px"}}>track</Link>,
        Filter: FilterCol3
    }
]