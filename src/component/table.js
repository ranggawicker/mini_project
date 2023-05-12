import React from 'react'
import DataTable from 'react-data-table-component';

export default function table(props) {
  return (
    <DataTable
            title={props?.title}
            columns={props?.columns}
            data={props?.data}
            pagination
        />
  )
}
