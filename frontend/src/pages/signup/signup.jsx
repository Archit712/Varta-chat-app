import {React,useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const {loading, signup}=useSignup();

  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-white'>
        Sign Up to <span className='text-red-500 font-bold'>Varta</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-white font-bold'>Full Name</span>
          </label>
          <input
            type='text'
            placeholder='Enter your name here...'
            className='w-full input input-bordered  h-10'
            value={inputs.fullName}
             onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>

<div>
  <label className='label p-2'>
    <span className='text-base label-text text-white font-bold'>Email</span>
  </label>
  <input
    type='email'
    placeholder='Enter your email here...'
    className='w-full input input-bordered h-10'
    value={inputs.username}
    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
    required
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address.')}
    onInput={(e) => e.target.setCustomValidity('')}
  />
</div>



        <div>
          <label className='label'>
            <span className='text-base label-text text-white font-bold'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
             value={inputs.password}
             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
           />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text text-white font-bold'>Confirm Password</span>
          </label>
          <input
            type='password'
            placeholder='Confirm Password'
            className='w-full input input-bordered h-10'
           value={inputs.confirmPassword}
           onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
        </div>
        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
        <Link
						to={"/login"}
						className='text-sm hover:underline text-red-400 font-semibold hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>
        <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div> 


        </form>
        </div>
        </div>
  )
}

export default Signup
