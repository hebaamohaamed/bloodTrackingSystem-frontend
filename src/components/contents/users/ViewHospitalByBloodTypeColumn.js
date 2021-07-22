import {FilterCol3} from '../hospital/filter'
import {FilterCol4} from '../hospital/filter'
export const COLUMNS = [
    {
        Header: 'Hospital',
        accessor: 'hospital',
        Filter: FilterCol3
    },
    {
        Header: 'Address',
        accessor: 'adress',
        Filter: FilterCol3
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: FilterCol3
    },
    {
        Header: 'Blood Type',
        accessor: 'bloodtype',
        Filter: FilterCol4
    },
    {
        Header: 'Google Maps',
        accessor: 'map',
        Cell: e =><a href={e.value}> Show</a>,
        Filter: FilterCol3
    }
]