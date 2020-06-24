import {nanoid} from "nanoid";
import React, {useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  getAllPeople,
  getEditedPerson,
  getFormErrors
} from './store/selectors/people';
import {
  addPerson,
  editPersonData,
  setFormErrors,
  updatePerson
} from './store/actions/people';
import Form from '../../../common/Form';
import {initialData} from '../PeoplePage';
import {peopleColumns} from '../../../service/peopleService';


const PeopleForm = ({history, match}) => {
  const dispatch = useDispatch();
  const people = useSelector(state => getAllPeople(state));
  const personData = useSelector(state => getEditedPerson(state));
  const formErrors = useSelector(state => getFormErrors(state));

  useEffect(() => {
    const id = match.params.id;
    if (id === "new") return
    const existingPersonData = people.find(person => person.id === id);
    if (!existingPersonData) history.push('/not-found')

    dispatch(editPersonData(existingPersonData))
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
    const errors = validate(personData);

    if (Object.keys(errors).length) {
      return;
    }

    if (personData.id) {
      dispatch(updatePerson(personData));
    } else {
      dispatch(addPerson({...personData, beloved: false, id: nanoid()}));
    }
    dispatch(editPersonData(initialData))
    history.push('/people')
  };

  const handleChange = (event) => {
    const {currentTarget: input} = event;
    const data = {...personData};
    const errors = {...formErrors};
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    dispatch(editPersonData(data))
    dispatch(setFormErrors(errors))
  };

  return (
    <Form
      columns={peopleColumns}
      data={personData}
      errors={formErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PeopleForm;
