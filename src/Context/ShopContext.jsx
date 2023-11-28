import { createContext } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
  const allProducts =all_product;
  allProducts.map((item)=>console.log(item.name)
  )
  

  

  

  return (
    <ShopContext.Provider value={allProducts}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;