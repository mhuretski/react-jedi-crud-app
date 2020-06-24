import {nanoid} from "nanoid";
import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  getAllPlanets,
  getEditedPlanet,
  getFormErrors
} from './store/selectors/planets';
import {
  addPlanet,
  editPlanetData,
  updatePlanet,
  setFormErrors
} from './store/actions/planets';
import Form from '../../../common/Form';
import {initialData} from '../PlanetsPage';
import {planetsColumns} from '../../../service/planetsService';


const PlanetForm = ({history, match}) => {
  const dispatch = useDispatch();
  const planets = useSelector(state => getAllPlanets(state));
  const planetData = useSelector(state => getEditedPlanet(state));
  const formErrors = useSelector(state => getFormErrors(state));

  useEffect(() => {
    const id = match.params.id;
    if (id === "new") return
    const existingPlanetData = planets.find(planet => planet.id === id);
    if (!existingPlanetData) history.push('/not-found')

    dispatch(editPlanetData(existingPlanetData))
  }, []);

  const validate = (data) => {
    let errors = {};
    Object.entries(data).map(([propKey, propVal]) => {
      if (!propVal && !propKey.includes('beloved')) {
        errors = {...errors, [propKey]: 'Field should not be empty'};
      }
    })
    dispatch(setFormErrors(errors))
    return errors
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(planetData);

    if (Object.keys(errors).length) {
      return;
    }

    if (planetData.id) {
      dispatch(updatePlanet(planetData));
    } else {
      dispatch(addPlanet({...planetData, beloved: false, id: nanoid()}));
    }
    dispatch(editPlanetData(initialData))
    history.push('/planets')
  };

  const handleChange = (event) => {
    const {currentTarget: input} = event;
    const data = {...planetData};
    const errors = {...formErrors};
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    dispatch(editPlanetData(data))
    dispatch(setFormErrors(errors))
  };

  return (
    <Form
      columns={planetsColumns}
      data={planetData}
      errors={formErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PlanetForm;
