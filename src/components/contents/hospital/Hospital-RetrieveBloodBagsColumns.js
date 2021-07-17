import {FilterCol} from './filter'
export const COLUMNS = [
    {
        Header: 'Bag ID',
        accessor: 'id',
        Filter: FilterCol
    },
    {
        Header: 'Blood Type',
        accessor: 'type',
        Filter: FilterCol
    },
    {
        Header: 'Safe',
        accessor: 'safe',
        Filter: FilterCol
    },
    {
        Header: 'Expired',
        accessor: 'exp',
        Filter: FilterCol
    }
]