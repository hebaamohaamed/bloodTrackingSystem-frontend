import {FilterCol3} from '../hospital/filter'
import {FilterCol4} from '../hospital/filter'
export const COLUMNS = [
    {
        Header: 'Hospital',
        accessor: 'hName',
        Filter: FilterCol3
    },
    {
        Header: 'Address',
        accessor: 'hAddress',
        Filter: FilterCol3
    },
    {
        Header: 'Blood Type',
        accessor: 'blood',
        Filter: FilterCol4
    },
    {
        Header: 'Google Maps',
        accessor: 'hMap',
        Cell: e =><a href={e.value} target="_blank"> Show</a>,
        Filter: FilterCol3
    }
]