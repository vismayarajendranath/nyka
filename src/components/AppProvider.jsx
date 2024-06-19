import { createContext, useState } from "react";
export const MyContext = createContext();

const AppProvider = ({ children }) => {

  // const name = "vismaya";
  const [searchTerm , setSearchTerm] = useState('')
  const [products, setProducts] = useState([]);

//   const searchHandler = () => {
// const arr = products.filter((item)=>{
//   return item.title.toLowerCase().includes(searchTerm.toLowerCase())
// })
// console.log(arr);
//   }



  return <MyContext.Provider value={{searchTerm ,setSearchTerm,products,setProducts }}>{children}</MyContext.Provider>;
};

export default AppProvider;
