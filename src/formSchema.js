import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .min(2,'Name must be at least 2 letters long'),
    size: yup.string()
        .required('Please select a size'),
    special: yup.string(),

    pepperoni: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean(),
    ham: yup.boolean(),
    chicken: yup.boolean()
})
