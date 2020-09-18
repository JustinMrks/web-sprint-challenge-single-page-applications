import React from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'




const PizzaBuilder = (props) => {
    const {values, update, submit, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onUpdate = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update( name, valueToUse )
    }




    return( 
        <div>
            <h2>Build Your Own Pizza</h2>
            <form>
                <label>
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onUpdate}
                        data-cy='name'
                    /> Name <span style={{color:'red'}}>{errors.name}</span>
                </label>
                    <br/>
                    <h3>Select a Size!</h3>
                <label>
                    <select name='size' value={values.size} onChange={onUpdate} data-cy='size'>
                        <option value="">-- select size --</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select> Size
                </label>

                <h3>Select your toppings!</h3>
                <div>
                    <label>
                        <input 
                            name='pepperoni' 
                            type='checkbox'
                            value={values.pepperoni}
                            onChange={onUpdate} 
                            data-cy='pepperoni'
                            /> pepperoni
                    </label>
                    <br/>
                    <label>
                        <input 
                            name='peppers' 
                            type='checkbox'
                            value={values.peppers}
                            onChange={onUpdate}
                            data-cy='peppers'
                            /> peppers
                    </label>
                    <br/>
                    <label>
                        <input 
                            name='onions' 
                            type='checkbox'
                            value={values.onions}
                            onChange={onUpdate}
                            data-cy='onions'
                            /> onions
                    </label>
                    <br/>
                    <label>
                        <input 
                            name='ham' 
                            type='checkbox'
                            value={values.ham}
                            onChange={onUpdate}
                            data-cy='ham'
                            /> ham
                    </label>
                    <br/>
                    <label>
                        <input 
                            name='chicken' 
                            type='checkbox'
                            value={values.chicken}
                            onChange={onUpdate}
                            data-cy='chicken'
                            /> chicken
                    </label>
                </div>
                    <h3>Any Requests?</h3>
                <label>
                    <input
                        name='special'
                        type='text'
                        value={values.special}
                        onChange={onUpdate}
                        data-cy='special'
                    />
                </label>
                    <br/> <br/>
                <button disabled={disabled} onSubmit={onSubmit} data-cy='submit'> submit </button>
            </form>
        </div>
    )
}

export default PizzaBuilder