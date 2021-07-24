import {FilterCol2} from '../filterProcesses'
export const COLUMNS = [
    {
        Header: 'Blood Bag Number',
        accessor: 'number',
        Filter: FilterCol2
    },
    {
        Header: 'Date',
        accessor: 'date',
        Filter: FilterCol2
    },
    {
        Header: 'Owner ID',
        accessor: 'owner',
        Filter: FilterCol2
    },
    {
        Header: 'Process ID',
        accessor: 'id',
        Filter: FilterCol2
    },
    {
        Header: 'Process Type',
        accessor: 'type',
        Filter: FilterCol2
    },
    {
        Header: 'User ID',
        accessor: 'userId',
        Filter: FilterCol2
    }
]