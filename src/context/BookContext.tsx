import React, {createContext, useState} from "react";

const defaultValue = {
    count:0,
    incrementCount: ()=>{}
}

const BookContext = createContext<{count: number, incrementCount: () => void}>(defaultValue);

interface ProviderProps {
    children?: React.ReactNode;
}

export const Provider:React.FunctionComponent<ProviderProps> = ({children}) =>{
    const [count,setCount] = useState<number>(5)
    const valueToShare = {
        count,
        incrementCount: ()=>{
            setCount(count +1 )
        }
    }
    return <BookContext.Provider value={valueToShare}>
        {children}
    </BookContext.Provider>
}

export default BookContext
