import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductModal.css";
import allTheActions from "../../State-Management/AllActions/main";


const ProductModal = ({ setShowProductModal, setProductSub }) => {
  const [qty, setQty] = useState(1);
  const [pVariant, setPVariant] = useState({});
  const [pExtras, setPExtras] = useState([]);
  const [pExtrasPrice, setPExtrasPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    name: setProductSub.name,
    totalPrice: setProductSub.price,
    qty,
    variant: "",
    extras: [],
    category,
  });

const categories = useSelector((state) => state.category.categories);
const dispatch = useDispatch();

useEffect(() => {
    if (setProductSub.variants !== undefined) {
      setPVariant(setProductSub.variants[0]);
    }
    const category = categories?.find(
      c => c.id == setProductSub.parentId
    );
}, []);

const basket = useSelector((state) => state.basket.products);

useEffect(() => {
    if (
      setProductSub.variants !== undefined && setProductSub.extras !== undefined
    ) {
      setProduct({
        ...product,
        qty,
        category,
        extras: pExtras,
        variant: pVariant.name,
        totalPrice: qty * (pExtrasPrice + pVariant.price),
      });
    } else if (
      setProductSub.variants === undefined &&
      setProductSub.extras === undefined
    ) {
      setProduct({
        ...product,
        qty,
        category,
        totalPrice: qty * setProductSub.price,
      });
    } else if (setProductSub.variants === undefined) {
      setProduct({
        ...product,
        qty,
        category,
        extras: pExtras,
        totalPrice: qty * (pExtrasPrice + setProductSub.price),
      });
    } else if (setProductSub.extras === undefined) {
      setProduct({
        ...product,
        qty,
        category,
        variant: pVariant.name,
        totalPrice: qty * pVariant.price,
      });
    }
  }, [qty, pExtras, pExtrasPrice, pVariant]);

const addtoorderHandler = () => {
    const basketProduct = basket?.filter(
      (item) =>
        item.name == product.name &&
        JSON.stringify(item.extras) == JSON.stringify(product.extras) &&
        item.variant == product.variant
    );

    if (basketProduct?.length !== 0) {
      basketProduct?.map((item) => {
        if (
          item?.name === product.name &&
          item?.variant === product.variant &&
          JSON.stringify(item?.extras) === JSON.stringify(product.extras)
        ) {
          dispatch(
            allTheActions.basket.increaseQtyToTheBasketProduct(
              item?.name,
              product.qty,
              product.totalPrice,
              product.variant,
              product.extras
            )
          );
        }
      });
    } else {
      dispatch(
        allTheActions.basket.addProductToTheBasket({
          ...product,
          qty,
          category: category,
        })
      );
    }
    setShowProductModal(false);
  }

  const modalCloseHandler = () => {
    setShowProductModal(false);
  }

  const OnChangeVariantHandler = e => {
    const mVariant = setProductSub.variants.find(
      (variant) => variant.name == e.target.value
    );
    setPVariant(mVariant);
  }

  const onChangeExtrasHandler = e => {
  const { value, checked } = e.target;

    const onChangeProduct = setProductSub.extras.find(
      (extra) => extra.name == value
    );

    if (checked) {
      setPExtras([...pExtras, onChangeProduct]);
      setPExtrasPrice(pExtrasPrice + onChangeProduct.price);
    }
    else {
      setPExtras([
        ...pExtras.filter((extra) => extra.name !== value),
      ]);
      setPExtrasPrice(pExtrasPrice - onChangeProduct.price);
    }
  };

  return (
    <>
      <div className="all" onClick={modalCloseHandler}></div>
      <div className="all-sub">
        <div className="all-sub-name">
          <h1>{setProductSub.name}</h1>
          <button className="btn active" onClick={modalCloseHandler}>
            X
          </button>
        </div>

        <hr className="hr" />

        {setProductSub.variants && (
          <>
            <div className="all-sub-variant">
              <h1>Size</h1>
              {setProductSub.variants.map((variant, index) => (
                <div key={index} className="variant-container">
                  <input
                    type="radio"
                    id={variant.name}
                    name="variant"
                    value={variant.name}
                    checked={pVariant == variant}
                    onChange={OnChangeVariantHandler}
                  />
                  <label className="variant-name" htmlFor={variant.name}>
                    {variant.name}
                  </label>
                  <label className="variant-price" htmlFor={variant.name}>
                    £{variant.price}
                  </label>
                </div>
              ))}
            </div>

            <hr className="hr" />
          </>
        )}

        {setProductSub.extras && (
          <>
            <div className="all-sub-options">
              <h1>Options</h1>

              {setProductSub.extras.map((extra, index) => (
                <div key={index} className="option-container">
                  <label htmlFor={extra.name}>
                    {extra.name} (+ £{extra.price})
                  </label>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id={extra.name}
                      name={extra.name}
                      value={extra.name}
                      onChange={onChangeExtrasHandler}
                    />
                    <div className="checkbox-tick">
                       ✓
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="hr" />
          </>
        )}

        <div className="all-sub-qty">
          <button
            className="btn active"
            onClick={() => qty > 1 && setQty(qty - 1)}
          >
            -
          </button>
          <h1>{qty}</h1>
          <button className="btn active" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>

        <div className="all-sub-btn">
          <button className="btn active" onClick={addtoorderHandler}>
            Add To Order
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
