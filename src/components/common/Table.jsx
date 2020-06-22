import React from 'react';
import Button from './Button';

function Table({columns, data, tableDescriptor, onDelete, onClick}) {

  return (
    <table className="table table-dark">
      <thead>
      <tr>
        <th scope="col">{tableDescriptor}</th>
        {columns.map(columnTitle => (
          <th key={columnTitle} scope="col">{columnTitle}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {!!data.length && data.map((item, index) => (
        <tr key={index}>
          <th scope="row"
              onClick={() => onClick(item, index)}>{index + 1}</th>
          {columns.map(columnTitle => (
            <td key={item[columnTitle] + columnTitle}
                onClick={() => onClick(item, index)}>{item[columnTitle]}</td>
          ))}
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
         <td>no {tableDescriptor} left</td>
       </tr>}
      </tbody>

    </table>
  );
}

export default Table;
