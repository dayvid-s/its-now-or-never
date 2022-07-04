import React,{useState, createContext, useContext} from 'react';

export const Context = createContext()

export default function Provider({children}){ 
    const {storageDareList, setStorageDareList} = ([])
    
  

    return(
        <Context.Provider value={{storageDareList, setStorageDareList}}>
            {children}
        </Context.Provider>
    )
}