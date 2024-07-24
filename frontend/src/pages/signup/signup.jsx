import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-black'>
        Sign Up to <span className='text-red-800 font-bold'>Varta</span>
      </h1>

      <form>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-black font-bold'>Full Name</span>
          </label>
          <input
            type='text'
            placeholder='Enter your name here...'
            className='w-full input input-bordered  h-10'
            // value={inputs.fullName}
            // onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className='label p-2 '>
            <span className='text-base label-text text-black font-bold'>Username</span>
          </label>
          <input
            type='text'
            placeholder='Ente your username here...'
            className='w-full input input-bordered h-10'
            // value={inputs.username}
            // onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text text-black font-bold'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
          //   value={inputs.password}
          //   onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
           />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text text-black font-bold'>Confirm Password</span>
          </label>
          <input
            type='password'
            placeholder='Confirm Password'
            className='w-full input input-bordered h-10'
            // value={inputs.confirmPassword}
            // onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
        </div>
        <GenderCheckbox/>
        <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>
							Sign Up
						</button>
					</div>        

        </form>
        </div>
        </div>
  )
}

export default signup