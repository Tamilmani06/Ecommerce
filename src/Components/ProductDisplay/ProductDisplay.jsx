import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const{product} = props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay-left">
            <div className="ProductDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="ProductDisplay-image">
            <img className='ProductDisplay-main-img'src={product.image} alt="" />
            </div>
        </div>
        <div className="ProductDisplay-Right">
            <h1>{product.name}</h1>
            <div className="ProductDisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>122</p>
            </div>
            <div className="ProductDisplay-right-prices">
                <div className="ProductDisplay-right-prices-old">   ${product.old_price} </div>
                <div className="ProductDisplay-right-prices-new">   ${product.new_price} </div>
            </div>
            <div className="ProductDisplay-right-Description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at, exercitationem facilis laudantium.
            </div>
            <div className="ProductDisplay-right-size">
                <h1>Select Size</h1>
                <div className="ProductDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
            <p className="ProductDisplay-right-category"><span>Category:</span>Women, T-Shirts Crop Top</p>
            <p className="ProductDisplay-right-category"><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay