import React, { useState } from 'react';
import { connect } from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';

import ButtonGroupComponent from '../button/buttonGroup.component'
import ButtonGetJoke from '../button/buttonGetJoke'
import ImputComponent from '../input/imputComponent'

import { actionRequest } from '../../Redux/actions/actionRequest'

const RadioGroupComponent = ({ actionRequest }) => {

  const [radioRequest, updateRadioReguest] = useState('')

  let buttonRequest, imputRequest = ''

  const valueButton = (event) => {
    buttonRequest = event.currentTarget.value
  }

  const valueImput = (event) => {
    imputRequest = event.target.value
  }

  const valueRadio = (event) => {
    updateRadioReguest(event.target.value)
  }

  const onButtonSwith = () => {
    chouseRespondRadio(radioRequest)
  }

  const chouseRespondRadio = (item) => {
    if (item === 'random') {
      actionRequest('random')
      buttonRequest = ''
    } else if (item === 'from_categories' && buttonRequest !== '') {
      actionRequest(`random?category=${buttonRequest}`)
    } else if (item === 'search' && imputRequest !== '') {
      actionRequest(`search?query=${imputRequest}`)
    }
  }

  return (
    <FormControl component="fieldset" style={{ width: '100%' }}>
      <RadioGroup aria-label="gender" name="categories" onChange={valueRadio}>
        <FormControlLabel value="random" control={<Radio color="default" />} label="Random" />
        <FormControlLabel value="from_categories" control={<Radio color="default" />} label="From categories" />
        <ButtonGroupComponent valueButton={valueButton} />
        <FormControlLabel value="search" control={<Radio color="default" />} label="Search" />
        <ImputComponent valueImput={valueImput} radioRequest={radioRequest} />
        <ButtonGetJoke onButtonSwith={onButtonSwith} />
      </RadioGroup>
    </FormControl>
  );
}

const mapDispathToProps = {
  actionRequest: actionRequest
}

export default connect(null, mapDispathToProps)(RadioGroupComponent)