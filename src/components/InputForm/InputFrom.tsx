import { useContext } from "react";
import { Context } from "../../provider/MainContext";


const InputFrom = () => {

    const {fullName, setFullName, age, setAge, job, setJob, employeeId, setEmployeeId, handleSubmitForm} = useContext(Context);

  return (
    <>
      <form
        className="w-1/2 h-screen flex flex-col justify-center items-2/3"
        onSubmit={(e)=> handleSubmitForm(e)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="full-name"
            >
              Full Name
            </label>
          </div>
          <div className="w-70px">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="full-name"
              type="text"
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="age"
            >
              Age
            </label>
          </div>
          <div className="w-70px">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="age"
              type="text"
              value={age}
              onChange={(e)=> setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="job"
            >
              Job
            </label>
          </div>
          <div className="w-70px">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="job"
              type="text"
              value={job}
              onChange={(e)=> setJob(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 "
              htmlFor="employeeId"
            >
              Employee ID
            </label>
          </div>
          <div className="w-70px">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="employeeId"
              type="text"
              value={employeeId}
              onChange={(e)=>setEmployeeId(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow
               bg-green-500
               hover:bg-green-400 
               focus:shadow-outline 
               focus:outline-none
               text-white 
               font-bold 
               py-2 px-4 
               rounded
               mt-5
               "
            >
              Insert
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputFrom;
