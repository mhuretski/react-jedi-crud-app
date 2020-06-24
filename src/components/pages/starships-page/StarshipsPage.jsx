import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Listing from '../../common/Listing';
import {
  getStarships,
  starshipsColumns
} from '../../service/starshipsService';
import {
  changeStarshipBelovedStatus,
  deleteStarship,
  setStarships
} from './components/store/actions/starships';
import {setLoading} from '../../../store/actions/loading';
import {getAllStarships} from './components/store/selectors/starships';

const localStorageKey = 'starshipsData';
export const initialData = starshipsColumns.reduce((columns, columnName) => {
  columns[columnName] = '';
  return columns;
}, {});

export default function StarshipsPage() {
  const dispatch = useDispatch();
  const starships = useSelector(state => getAllStarships(state));
  const storedData = localStorage.getItem(localStorageKey);

  useEffect(() => {
    const getData = async () => {
      const getDataFromSource = async () => {
        if (starships && starships.length > 0) {
          return;
        }

        const data = async () => {
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            return (parsedData && parsedData.length !== 0) ? parsedData : getStarships();
          }
          return getStarships();
        };

        dispatch(setStarships(await data()));
      };

      dispatch(setLoading(true));
      await getDataFromSource();
      dispatch(setLoading(false));
    };

    getData().then(() => {});
  }, []);

  return (
    <Listing
      tableDescriptor={'Starships'}
      elementToAdd={'Starship'}
      columns={starshipsColumns}
      localStorageKey={localStorageKey}
      routePath={'starships'}
      deleteItem={deleteStarship}
      getData={getAllStarships}
      changeBelovedStatus={changeStarshipBelovedStatus}
    />
  )
}
