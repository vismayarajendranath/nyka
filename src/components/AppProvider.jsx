import { createContext, useState } from "react";
export const MyContext = createContext();

const AppProvider = ({ children }) => {

  // const name = "vismaya";
  const [searchTerm , setSearchTerm] = useState('')
  const [products, setProducts] = useState([]);

  const [fetchedProd, setFetchedProd] = useState({})

  const [likesProds, setLikedProds] = useState([])

//   const searchHandler = () => {
// const arr = products.filter((item)=>{
//   return item.title.toLowerCase().includes(searchTerm.toLowerCase())
// })
// console.log(arr);
// setProducts(arr)
//   }

const handleLike = (id) =>{
  setLikedProds((prev)=>[...prev, id])
}
// console.log(likesProds);

  return <MyContext.Provider value={{searchTerm ,setSearchTerm,products,setProducts ,fetchedProd,setFetchedProd,likesProds,setLikedProds,handleLike}}>{children}</MyContext.Provider>;
};

export default AppProvider;
