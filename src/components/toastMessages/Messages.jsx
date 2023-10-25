import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginSuccess = () => toast.success('Login successfully!');
export const loginError = () => toast.error('Invalid credentials!');
export const passwordError = () => toast.error('Please type your password!');
export const emailError = () => toast.error('Please type your email!');
export const registerSuccess = () => toast.success('Check your email for verification!');
export const registerError = () => toast.error('Fill the required fileds!');
export const emailExistError = () => toast.error('Email already exist!');