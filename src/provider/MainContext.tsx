import { createContext, ReactNode, useState } from "react";

export const Context = createContext<IContextReturnType>({} as IContextReturnType);

interface IProps{
    children: ReactNode;
}

export interface IContextReturnType{
    fullName: string;
    setFullName: (e:any)=> void;
    age: string,
    setAge: (e:any)=> void;
    job: string,
    setJob: (e:any)=> void,
    employeeId: string,
    setEmployeeId: (e:any)=> void;
    handleSubmitForm: (e:any)=> void;
}

const MainContext = ({children}: IProps) => {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [job, setJob] = useState("");
    const [employeeId, setEmployeeId] = useState("");


    
  const handleSubmitForm = (e:any) => {
    e.preventDefault();
    const formData = {
        fullName,
        age,
        job,
        employeeId
    }
    console.log('objjjj: ',formData);
  };
    
  return (
    <Context.Provider value={{
        fullName,
        setFullName,
        age,
        setAge,
        job,
        setJob,
        employeeId,
        setEmployeeId,
        handleSubmitForm
    }}>
        {children}
    </Context.Provider>
  )
};

export default MainContext;
