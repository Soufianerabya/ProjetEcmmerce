import React, {useContext, useEffect, useState} from 'react'
import './CSS/ShopCategory.css'
import ShopContext from'../Context/ShopContext'
import dropdown_icon from'../Components/Assets/dropdown_icon.png'
import Item from'../Components/Item/Item'
import all_product from "../Components/Assets/all_product";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ShopCategory ({category , banner})
{
    console.log(category)

    const [ProductList, setProductList] = useState([]);
    const [SearchValue, setSearchValue] = useState("");
    const [categories  , setCategoryList] = useState([])
    const [currentCategory , setCurrentCategory] = useState()
    // console.log(currentCategory)



    const reset = (e)=>{

        e.preventDefault()
        setSearchValue("")

    }

    const displayProduit = () => {

        let ProduitTemp = [];



        if (currentCategory !== undefined) {
            ProduitTemp = ProductList.filter((product) => {

                return (
                    product.category === currentCategory
                )

            });
            console.log(ProduitTemp.length)
            console.log(category.length)
        }

        if (Search !== undefined) {
            ProduitTemp = ProductList.filter((product) => {
                return (
                    product.name.toUpperCase().includes(SearchValue.toUpperCase())&&
                    product.category === currentCategory
                );
            });
        }

        if (ProduitTemp.length > 0) {
            console.log(ProduitTemp.length)
            return ProduitTemp.map((item, key) => (
                <Item key={key} id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                      discount={item.discount}
                />
            ));
        } else
        {
            return (
                <tr>
                    <td colSpan={9} className="text-center text-danger">Sorry No Item</td>
                </tr>
            );
        }


    }

    const Search = (e) => {
        e.preventDefault();
        const SearchValue = document.getElementById('search').value;
        setSearchValue(SearchValue);
        console.log(SearchValue)
        // setCurrentCategory()
    };

    useEffect(() => {
        setProductList(all_product)
        setCurrentCategory(category)
    }, [category , all_product]);




    return (
        <div className='shop-category'>
            <div>

                <form>
                    <div className="row g-3 align-items-center float-end search z-3">

                        <div className="col-auto">
                            <input type="text" className="form-control mx-1" placeholder="search" id="search" onChange={Search}/>
                        </div>
                        <div className="col-auto">
                            <input className="btn-warning btn" type="reset" value="reset" onClick={reset}  />
                        </div>

                    </div>


                </form>
            </div>
            <img src={banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" className='z-0' />
                </div>
            </div>
            <div className='new-collections'>
                <h1>NEW COLLECTIONS</h1>
                <hr/>
                <div className="collections">
                {displayProduit()}
            </div>
            </div>
        </div>

    );
}