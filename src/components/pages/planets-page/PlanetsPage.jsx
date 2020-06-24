import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Listing from '../../common/Listing';
import {
  getPlanets,
  planetsColumns
} from '../../service/planetsService';
import {
  changePlanetBelovedStatus,
  deletePlanet,
  setPlanet
} from './components/store/actions/planets';
import {setLoading} from '../../../store/actions/loading';
import {getAllPlanets} from './components/store/selectors/planets';

const localStorageKey = 'planetsData';
export const initialData = planetsColumns.reduce((columns, columnName) => {
  columns[columnName] = '';
  return columns;
}, {});

export default function PlanetsPage() {
  const dispatch = useDispatch();
  const planets = useSelector(state => getAllPlanets(state));
  const storedData = localStorage.getItem(localStorageKey);

  useEffect(() => {
    const getData = async () => {
      const getDataFromSource = async () => {
        if (planets && planets.length > 0) {
          return;
        }

        const data = async () => {
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            return (parsedData && parsedData.length !== 0) ? parsedData : getPlanets();
          }
          return getPlanets();
        };

        dispatch(setPlanet(await data()));
      };

      dispatch(setLoading(true));
      await getDataFromSource();
      dispatch(setLoading(false));
    };

    getData().then(() => {});
  }, []);

  return (
    <Listing
      tableDescriptor={'Planets'}
      elementToAdd={'Planet'}
      columns={planetsColumns}
      localStorageKey={localStorageKey}
      routePath={'planets'}
      deleteItem={deletePlanet}
      getData={getAllPlanets}
      changeBelovedStatus={changePlanetBelovedStatus}
    />
  )
}
