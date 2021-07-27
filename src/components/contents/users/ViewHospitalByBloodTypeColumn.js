import {FilterCol9} from '../filterBloodBags'
import {FilterCol4} from '../filterBloodBags'
import {FilterCol3} from '../filterBloodBags'
export const COLUMNS = [
    {
        Header: 'Hospital',
        accessor: 'hName',
        Filter: FilterCol9
    },
    {
        Header: 'Address',
        accessor: 'hAddress',
        Filter: FilterCol9
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