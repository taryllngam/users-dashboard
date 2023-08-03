import { createContext } from "react";
import React from "react";
import { useContext } from "react";


export function useLocalStorage(key, intialValue) {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(key)) || intialValue
    );
  
    const setLocalStorageValue = (value) => {
      setValue((prev) => {
        const newData = [...prev, value];
        localStorage.setItem(key, JSON.stringify(newData));
        return newData;
      });
    };
  
    return { value, setValue: setLocalStorageValue };
  }
  
  export const ProfileContext = createContext(null);
  export const ProfileProvider = ProfileContext.Provider;
  
  export const useFoodItems = () => {
    return useContext(ProfileContext);
  };