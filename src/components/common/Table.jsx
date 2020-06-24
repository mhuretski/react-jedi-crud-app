import React from 'react';
import Button from './Button';

function Table({columns, data, tableDescriptor, onDelete}) {

  const renderCell = (item, column) => column.content ?
    column?.content(item) : item[column.colName];

  return (
    <table className="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        {columns.map(({colName}) => {
          if (colName !== 'id') {
            return <th key={colName} scope="col">{colName}</th>;
          }
          return null
        })}
      </tr>
      </thead>
      <tbody>
      {!!data.length && data.map((item, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          {columns.map(column => {
            if (column.colName !== 'id') {
              return (
                <td key={item[column.colName] + column.colName}>
                  {renderCell(item, column)}
                </td>
              );
            }
            return null
          })}
          <td>
            <Button
              label="Delete"
              classes="btn btn-danger"
              onClick={() => onDelete(item)}
            />
          </td>
        </tr>
      ))}
      {!data.length &&
       <tr>
         <th colSpan={columns.length + 1}>no {tableDescriptor} left</th>
       </tr>}
      </tbody>
    </table>
  );
}

export default Table;
