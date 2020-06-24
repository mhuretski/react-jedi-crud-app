import {nanoid} from "nanoid";
import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  getAllStarships,
  getEditedStarship,
  getFormErrors
} from './store/selectors/starships';
import {
  addStarship,
  editStarshipData,
  setFormErrors,
  updateStarship,
} from './store/actions/starships';
import Form from '../../../common/Form';
import {initialData} from '../StarshipsPage';
import {starshipsColumns} from '../../../service/starshipsService';


const StarshipsForm = ({history, match}) => {
  const dispatch = useDispatch();
  const starships = useSelector(state => getAllStarships(state));
  const starshipData = useSelector(state => getEditedStarship(state));
  const formErrors = useSelector(state => getFormErrors(state));

  useEffect(() => {
    const starshipId = match.params.id;
    if (starshipId === "new") return
    const existingStarshipData = starships.find(starship => starship.id === starshipId);
    if (!existingStarshipData) history.push('/not-found')

    dispatch(editStarshipData(existingStarshipData))
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
    const errors = validate(starshipData);

    if (Object.keys(errors).length) {
      return;
    }

    if (starshipData.id) {
      dispatch(updateStarship(starshipData));
    } else {
      dispatch(addStarship({...starshipData, beloved: false, id: nanoid()}));
    }
    dispatch(editStarshipData(initialData))
    history.push('/starships')
  };

  const handleChange = (event) => {
    const {currentTarget: input} = event;
    const data = {...starshipData};
    const errors = {...formErrors};
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    dispatch(editStarshipData(data))
    dispatch(setFormErrors(errors))
  };
  return (
    <Form
      columns={starshipsColumns}
      data={starshipData}
      errors={formErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StarshipsForm;
