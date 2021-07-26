import {FilterCol} from '../filterBloodBags'
import {FilterCol3} from '../filterBloodBags'
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
        Header: 'Test Results',
        accessor: 'test',
        Filter: FilterCol
    },
    {
        Header: 'Capacity ',
        accessor: 'mm',
        Filter: FilterCol
    },
    {
        Header: 'Temprature',
        accessor: 'temperature',
        Filter: FilterCol
    },
    {
        Header: 'Donor',
        accessor: 'donorID',
        Filter: FilterCol
    },
    {
        Header: 'Date',
        accessor: 'date',
        Filter: FilterCol
    },
    {
        Header: 'Expiry Date',
        accessor: 'expired',
        Filter: FilterCol
    }
]