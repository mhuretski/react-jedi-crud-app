import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Listing from '../../common/Listing';
import {
  getPeople,
  peopleColumns
} from '../../service/peopleService';
import {
  changePersonBelovedStatus,
  deletePerson,
  setPeople
} from './components/store/actions/people';
import {setLoading} from '../../../store/actions/loading';
import {getAllPeople} from './components/store/selectors/people';

const localStorageKey = 'peopleData';
export const initialData = peopleColumns.reduce((columns, columnName) => {
  columns[columnName] = '';
  return columns;
}, {});

export default function PeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector(state => getAllPeople(state));
  const storedData = localStorage.getItem(localStorageKey);

  useEffect(() => {
    const getData = async () => {
      const getDataFromSource = async () => {
        if (people && people.length > 0) {
          return;
        }

        const data = async () => {
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            return (parsedData && parsedData.length !== 0) ? parsedData : getPeople();
          }
          return getPeople();
        };

        dispatch(setPeople(await data()));
      };

      dispatch(setLoading(true));
      await getDataFromSource();
      dispatch(setLoading(false));
    };

    getData().then(() => {});
  }, []);

  return (
    <Listing
      tableDescriptor={'People'}
      elementToAdd={'Person'}
      columns={peopleColumns}
      localStorageKey={localStorageKey}
      routePath={'people'}
      deleteItem={deletePerson}
      getData={getAllPeople}
      changeBelovedStatus={changePersonBelovedStatus}
    />
  )
}
