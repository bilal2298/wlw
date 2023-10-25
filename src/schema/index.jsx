import * as Yup from 'yup'

export const forgetSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
})


export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter your password"),
    user: Yup.string()
    .oneOf(['buyer', 'supplier'], 'Invalid user selection')
    .required('User is required'),
})

export const supplierRegisterSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Enter your first name"),
    gender: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender selection')
    .required('Gender is required'),
    lastName: Yup.string().min(2).max(25).required("Enter your last name"),
    email: Yup.string().email().required("Enter your email"),
    organizationName: Yup.string().required("Enter your organization"),
    password: Yup.string().min(8).required("Enter your password"),
    confirm_password: Yup.string().min(8)
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    countryName: Yup.string().required("Enter your Country name"),
    city: Yup.string().required("Enter your City name"),
    state: Yup.string().required("Enter your State/Region/Province"),
    zipCode: Yup.number().required("Enter your zip code"),
    address: Yup.string().required("Enter your address"),
})

export const buyerRegisterSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Enter your first name"),
    gender: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender selection')
    .required('Gender is required'),
    lastName: Yup.string().min(2).max(25).required("Enter your last name"),
    middleName: Yup.string().min(2).max(25).required("Enter your middle name"),
    email: Yup.string().email().required("Enter your email"),
    password: Yup.string().min(8).required("Enter your password"),
    confirm_password: Yup.string().min(8)
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    country: Yup.string().required("Enter your Country name"),
    city: Yup.string().required("Enter your City name"),
    state: Yup.string().required("Enter your State/Region/Province"),
    zipCode: Yup.number().required("Enter your zip code"),
    phone: Yup.number().required("Enter your zip code"),
    dob: Yup.string().required("Enter your zip code"),
    address: Yup.string().required("Enter your address"),
})