import React, {useState,useEffect} from 'react'
import './CheckOut-Basket.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const CheckOutBasket = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket.products);
  const categories = useSelector((state) => state.category.categories);

  const [totalBPrice, setTotalBPrice] = useState(0);
  const [mCategories, setMCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
  }, []);
  
  useEffect(() => {
    const tBasketPrice = basket.reduce((acu, curr) => {
      return acu + parseFloat(curr.totalPrice);
    }, 0);
    setTotalBPrice(tBasketPrice);
  }, [basket]);

  useEffect(() => {
    setMCategories(categories.filter((category) => category.parent == null));
  }, []);


  useEffect(() => {
    const filterProd = [];
    mCategories?.map(
      (category) =>
        (filterProd[category.name] = {
          products: basket?.filter(
            (product) => product.category == category.name
          ),
        })
    );
    setFilterProducts(filterProd);
  }, [mCategories]);

   const backButtonHandler = () => {
    navigate(-1);
  }


  return (
    <div className="checkout">
      <div className="checkout-head">
        <img src="../../images/arrow.png" alt="Arrow" onClick={backButtonHandler} />
        <h1>Checkout</h1>
        <img src="../../images/extra.png" alt="extra" />
      </div>

      <div className="checkout-topmost">
        <div className="checkout-topmost-description">
          <h1>Kempston Hammers Sports & Social Club</h1>
          <p>134 High Street, Kempston, Bedford, Bedfordshire, MK42 7BN</p>
        </div>

        {basket.length == 0 ? (
          <div className="nocheckout">
            <h4>There is no product in your checkout</h4>
          </div>
        ) : (
          <>
            <div className="checkout-topmost-alllist">
              {Object.keys(filterProducts)?.map((category, index) => (
                <div key={index}>
                  {filterProducts[category]?.products?.length !== 0 && (
                    <h1 className="category-cap">
                      {category.toLowerCase()} (
                      {filterProducts[category]?.products?.reduce((acc, cur) => {
                        return acc + cur.qty;
                      }, 0)}
                      )
                    </h1>
                  )}
                  {filterProducts[category]?.products?.map((product, index) => {
                    return (
                      <div className="checkout-topmost-alllist-item" key={index}>
                        <div className="checkout-topmost-alllist-item-left">
                          <h1>
                            {product.qty} x {product.name}
                          </h1>
                          <p>
                            {product.variant}
                            {product.extras.map((extra, index) => (
                              <span key={index}>, {extra.name}</span>
                            ))}
                          </p>
                        </div>
                        <div className="checkout-topmost-list-item-right">
                          <h1>£{product.totalPrice.toFixed(2)}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <hr className="hrcheckout" />
          </>
        )}

        {basket.length == 0 ? (
          <div className="checkout-topmost-addnotes"></div>
        ) : (
          <>
            <div className="checkout-topmost-addnotes">
              <label htmlFor="addnote">Add Notes:</label>
              <textarea name="addnote" id="addnote"></textarea>
            </div>
            <hr className="hrcheckout" />
          </>
        )}
      </div>

      {basket.length == 0 ? (
        <div className="checkout-middle"></div>
      ) : (
        <div className="checkout-middle">
          <h1>
            Table Number:{" "}
            <span className="checkout-middle-number">{randomNumber}</span>
          </h1>
        </div>
      )}

      {basket.length == 0 ? (
        <div className="checkout-bottom" onClick={backButtonHandler}>
          <h3>Go Back and Purchase Something</h3>
        </div>
      ) : (
        <div
          className="checkout-bottom">
          <h1>Confirm Order</h1>
          <h1>
            £{totalBPrice.toFixed(2)} / {basket.length}{" "}
            Item
          </h1>
        </div>
      )}
    </div>
  )
}

export default CheckOutBasket
