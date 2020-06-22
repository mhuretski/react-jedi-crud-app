import React, {
  useEffect,
  useState
} from 'react';
import Table from "./Table";
import Form from './Form';
import Button from './Button';

const useStateWithLocalStorage = (getInitialRestData, localStorageKey) => {
  const [value, setValue] = useState(getInitialRestData);

  useEffect(() => {
    const getData = async () => {
      const storedData = localStorage.getItem(localStorageKey);
      let data;
      if (storedData) {
        data = JSON.parse(storedData);
      } else {
        data = await getInitialRestData();
      }
      setValue(data);
    };

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

function Listing({
                   getInitialRestData,
                   tableDescriptor,
                   elementToAdd,
                   columnStorage,
                   dataStorage
                 }) {
  const [editData, setEditData] = useState(null);
  const [index, setIndex] = useState(-1);
  const [showForm, setShowForm] = useState(false);
  const [storedData, setData] = useStateWithLocalStorage(getInitialRestData, dataStorage);

  const storedColumns = localStorage.getItem(columnStorage);
  const columns = (storedData && storedData.length) ?
    Object.keys(storedData[0]) :
    (storedColumns) ? JSON.parse(storedColumns) : null;
  if (columns) {
    localStorage.setItem(columnStorage, JSON.stringify(columns));
  }

  const handleAdd = (item, index = -1) => {
    let newData;
    if (index !== -1) {
      newData = [...storedData];
      newData[index] = Object.assign(item);
    } else {
      newData = [...storedData, item];
    }

    setData(newData);
    setIndex(-1);
    setEditData(null);
    setShowForm(false);
  };

  const handleDelete = (item) => {
    const newData = storedData.filter(storedItem => storedItem !== item);
    setData(newData);
  };

  const handleEdit = (item, index) => {
    const dataToEdit = storedData.filter(storedItem => storedItem === item);
    if (dataToEdit.length) {
      const itemToEdit = Object.assign(dataToEdit[0]);

      setEditData(itemToEdit);
      setIndex(index);
      setShowForm(true);
    } else {
      console.log('item not found');
    }
  };

  const getInitialData = () => {
    if (columns) {
      if (editData) {
        return columns.reduce((cols, columnName) => {
          cols[columnName] = editData[columnName];
          return cols;
        }, {});
      } else {
        return columns.reduce((cols, columnName) => {
          cols[columnName] = '';
          return cols;
        }, {});
      }
    }
    return null;
  };

  return (
    <div className="container">
      <h2>{tableDescriptor} from Star Wars Universe</h2>
      {columns && <div>
        {!showForm && <Table
          data={storedData}
          setValues={setData}
          columns={columns}
          tableDescriptor={tableDescriptor}
          onDelete={handleDelete}
          onClick={handleEdit}
          showTableContent={storedData && storedData.length !== 0}
        />}

        {showForm && <Form
          initialData={getInitialData()}
          columns={columns}
          onAddData={handleAdd}
          index={index}
        />}
        {!showForm &&
           <Button
             label={`Create ${elementToAdd}`}
             classes="alert alert-danger"
             onClick={() => setShowForm(true)}
           />}
      </div>}

      {!columns && <div>
        <h1 className="not-found">There is no information for this page</h1>
      </div>}
    </div>
  );
}

export default Listing;
