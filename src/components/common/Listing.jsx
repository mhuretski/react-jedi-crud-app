import React, {useState} from 'react';
import Table from "./Table";
import Form from './Form';

function PeoplePage({initialData, tableDescriptor}) {
  const [storedData, setData] = useState(initialData);
  const columns = (initialData) ? Object.keys(initialData[0]) : null;

  const handleAdd = (item) => {
    const newData = [...storedData, item];
    setData(newData);
  };

  const handleDelete = (item) => {
    const newData = storedData.filter(planet => planet !== item);
    setData(newData);
  };


  const getInitialData = () => {
    return (columns) ?
      columns.reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
      }, {}) : null;
  };


  return (
    <div className="container">
      {columns && <Table
        data={storedData}
        setValues={setData}
        initialData={initialData}
        columns={columns}
        tableDescriptor={tableDescriptor}
        onDelete={handleDelete}
      />}
      {columns && <Form
        initialData={getInitialData()}
        columns={columns}
        onAddData={handleAdd}
      />}
      {!columns && <div>
        <h1 className="not-found">There is no information for this page</h1>
      </div>}
    </div>
  );
}

export default PeoplePage;
