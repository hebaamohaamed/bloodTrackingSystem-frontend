import {FilterCol} from '../filterBloodBags'
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
        Header: 'Expired',
        accessor: 'expired',
        Filter: FilterCol
    }
    
]