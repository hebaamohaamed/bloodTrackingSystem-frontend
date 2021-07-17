import {FilterCol} from './filter'
export const COLUMNS = [
    {
        Header: 'Blood Bag Number',
        accessor: 'number',
        Filter: FilterCol
    },
    {
        Header: 'Date',
        accessor: 'date',
        Filter: FilterCol
    },
    {
        Header: 'Owner ID',
        accessor: 'owner',
        Filter: FilterCol
    },
    {
        Header: 'Process ID',
        accessor: 'id',
        Filter: FilterCol
    },
    {
        Header: 'Process Type',
        accessor: 'type',
        Filter: FilterCol
    },
    {
        Header: 'User ID',
        accessor: 'userId',
        Filter: FilterCol
    }
]