import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import Table from "./Table";
import Button from './Button';
import {
  getLoading,
} from '../../store/selectors/loading';

function Listing({
                   tableDescriptor,
                   elementToAdd,
                   columns,
                   localStorageKey,
                   routePath,
                   deleteItem,
                   getData,
                   changeBelovedStatus
                 }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => getLoading(state));
  const storedData = useSelector(state => getData(state));
  localStorage.setItem(localStorageKey, JSON.stringify(storedData));

  const handleBelovedStatus = id => {
    dispatch(changeBelovedStatus(id));
  };

  const handleDelete = (item) => {
    dispatch(deleteItem(item));
  };

  const getColumns = () => {
    if (!storedData.length) {
      return columns.map(colName => {
        return {colName};
      });
    }

    return Object.keys(storedData[0]).map(colName => {
      if (colName === 'beloved') {
        return {
          colName,
          content: ({beloved, id}) => (
            <input
              type="checkbox"
              checked={beloved}
              onChange={() => handleBelovedStatus(id)}
            />
          )
        };
      }
      if (colName === 'name') {
        return {
          colName,
          content: ({name, id}) => (
            <Link style={{color: '#ffc107'}}
                  to={`/${routePath}/${id}`}>{name}</Link>
          )
        };
      }
      return {colName};
    });
  };

  return (
    <div className="container">
      <h2>{tableDescriptor} from Star Wars Universe</h2>
      {isLoading && <div id="loader">
        <Spinner animation="border"/>
      </div>}
      {!isLoading && <div>
        {<Link to={`/${routePath}/new`}>
          <Button
            label={`Add ${elementToAdd}`}
            classes="btn alert btn-primary"
          />
        </Link>}
        {columns && <Table
          data={storedData}
          columns={getColumns()}
          tableDescriptor={tableDescriptor}
          onDelete={handleDelete}
          showTableContent={storedData && storedData.length !== 0}
        />}

        {!columns && <div>
          <h1 className="not-found">There is no information for this page</h1>
        </div>}
      </div>}
    </div>
  );
}

export default Listing;
