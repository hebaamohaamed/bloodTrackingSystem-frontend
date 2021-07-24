import {FilterCol} from '../filterBloodBags'
import {FilterCol3} from '../filterBloodBags'
export const COLUMNS = [
    {
        Header: 'Bag Number',
        accessor: 'key',
        Filter: FilterCol
    },
    {
        Header: 'Safe',
        accessor: 'test',
        Filter: FilterCol
    },
    {
        Header: 'Expired',
        accessor: 'expired',
        Filter: FilterCol
    }
]