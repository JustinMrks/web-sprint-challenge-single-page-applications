import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import * as yup from 'yup'
import schema from './formSchema'
import PizzaBuilder from './PizzaBuilder'
import ConfirmOrder from './ConfirmOrder'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
  name: '',
  size:'',
  special:'',
  pepperoni:false,
  peppers:false,
  onions: false,
  ham: false,
  chicken: false
}

const initailErrors = {
  name:'',
  size:'',
}

const initialPizzas = []

const initialDisabled = true

const App = () => {
  const [formValues,setFormValues] = useState(initialFormValues)
  const [errors,setErrors] = useState(initailErrors)
  const [pizzas,setPizzas] = useState(initialPizzas)
  const [disabled,setDisabled] = useState(initialDisabled)

  const history = useHistory()

  const validate = (name, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(schema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        console.log(valid)
        setErrors({
          ...errors, 
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });
  }

  const addPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        console.log(res)
        setPizzas(...pizzas,res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const update = ( name, value ) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special.trim(),
      toppings: ['pepperoni','peppers','onions','ham','chicken'].filter(top => formValues[top])
    }
    addPizza(newPizza)
  }
  
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div>
      <Browser>
        <div id='headerbox'> 
          <h1>Lambda Eats</h1>
          <nav>
            <a href='/'>Home</a>
          </nav>  
        </div>

        <Switch>

          <Route path='/orders'>
            <ConfirmOrder pizzas={pizzas}/>
          </Route>

          <Route path='/pizza'>
            <PizzaBuilder values={formValues} update={update} submit={submit} disabled={disabled} errors={errors}/>
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>

        </Switch>
    </Browser> 
    </div>
  );
};
export default App;
