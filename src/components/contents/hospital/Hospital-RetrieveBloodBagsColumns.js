import {FilterCol} from '../filterBloodBags'
export const COLUMNS = [
    {
        Header: 'Bag Number',
        accessor: 'key',
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
        Header: 'Expired',
        accessor: 'expired',
        Filter: FilterCol
    }
]