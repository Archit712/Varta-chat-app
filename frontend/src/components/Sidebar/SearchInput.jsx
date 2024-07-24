//import { IoSearchSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-blue-900 text-white'>
            <FaSearch />
                {/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
			</button>
		</form>
	);
};
export default SearchInput;