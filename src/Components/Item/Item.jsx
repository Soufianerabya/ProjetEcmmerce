import React from 'react'
import './Item.css'



const Item = (props) => {
    const discount = props.discount;
    const discountSquareStyle = {
        display: 'inline-block',
        backgroundColor: 'red', // You can set the color you prefer
        color: 'white',
        padding: '4px',
        borderRadius: '3px',
        marginRight: '5px', // Adjust the spacing as needed
    };
  return (
    <div className='class="card" style="width: 18rem;"' >
        {discount &&
            (<div className="discountBadge">Discount</div>)
        }
      <img src={props.image} alt="" />
      <p>{props.name}</p>

        {discount?( <p>
            <span className="old_price">{props.old_price} Dh</span>
            <span className="new_price">{props.new_price}</span> <span>Dh</span>
        </p>):(
            <p className="price">
                {props.old_price} <span>Dh</span>
            </p>
        )
        }

    </div>
  )
}

export default Item
