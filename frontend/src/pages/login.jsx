import React from 'react'

function login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-black'>
					Login to
          <span className='text-red-800 font-bold'> Varta</span>
          </h1>

          <form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black font-bold'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-15'
							// value={username}
							// onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
          <div>
						<label className='label'>
							<span className='text-base label-text text-black font-bold'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-15'
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

          <a href='#' className='text-sm text-red-700 font-semibold  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
 						<button className='btn btn-block btn-sm mt-2'>Login</button>
 					</div>
          </form> 

          </div>
          </div>

  )
}

export default login