import React, { useState,useEffect } from "react";
import './Home.css'
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {List,ProductModal, LangModal} from "../../All-Components/main";


const Home = () => {
  const [mCat, setMCat] = useState([]);
  const [sCat, setSCat] = useState([]);
  const [sProducts, setSProducts] = useState([]);
  const [activeMCat, setActiveMCat] = useState({});
  const [activeSCat, setActiveSCat] = useState({});
  const [params] = useSearchParams();
  const [totalBPrice, setTotalBPrice] = useState(0);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productSub, setProductSub] = useState({});
  const [showLangModal, setShowLangModal] = useState(false);
  

  const categories = useSelector((state) => state.category?.categories);
  const products = useSelector((state) => state.product?.products);
  const basket = useSelector((state) => state.basket);
  const navigate = useNavigate();
  

useEffect(() => {
    setMCat(categories?.filter((category) => category.parent == null));
  }, []);

useEffect(() => {
    setSCat(
      categories?.filter(
        (category) =>
          category.parent == (params.get("main") || mCat[0]?.id)
      )
    );
    setActiveMCat(params.get("main") || mCat[0]?.id);
  }, [mCat]);

useEffect(() => {
    setSProducts(
      products.filter(
        (product) =>
          product.parentId == (params.get("sub") || sCat[0]?.id)
      )
    );
    setActiveSCat(params.get("sub") || sCat[0]?.id);
  }, [sCat]);

 const handleMCat = (id) => {
    setSCat(categories?.filter((category) => category.parent == id));
    const activemcat = categories?.find((category) => category.id == id);
    setActiveMCat(activemcat.id);
    navigate(
      {
        pathname: "",
        search: `main=${id}`,
      },
      { replace: true }
    );
  }

 const handleSCat = (id) => {
    setSProducts(products.filter((product) => product.parentId == id));
    const activesubcat = categories?.find((category) => category.id == id);
    setActiveSCat(activesubcat.id);
    navigate(
      {
        pathname: "",
        search: `?main=${activeMCat}&sub=${id}`,
      },
      { replace: true }
    );
  }

  useEffect(() => {
    const tBasketPrice = basket.products.reduce((acu, curr) => {
      return acu + parseFloat(curr.totalPrice);
    }, 0);
    setTotalBPrice(tBasketPrice);
  }, [basket]);

 const BasketHandler = () => {
    navigate("/basket");
  }


  return (
    <div className="main">
      <div className="main-topmost">
        <div className="main-topmost-heading">
          <h1>Kings Arms Cardington</h1>
          <p>134 High Street, Kempston, Bedford, Bedfordshire, MK42 7BN</p>
        </div>
        <div className="main-topmost-maincategory">
          {mCat?.map((category) => {
            return (
              <button
                className={
                  activeMCat == category.id ? "btn active" : "btn"
                }
                onClick={() => handleMCat(category.id)}
                key={category.id}>{category.name}</button>
            );
          })}
        </div>

        <div className="main-topmost-subcategory">
          {sCat?.map((category) => (
            <button
              className={
                activeSCat == category.id ? "btn-underline active": "btn-underline"
              }
              onClick={() => handleSCat(category.id)}
              key={category.id}>{category.name}</button>
          ))}
        </div>
    </div>

    <div
        className={
          basket.products.length == 0 ? "main-mid-whole" : "main-mid"
        }
      >
        <List  products={sProducts}
          setShowProductModal={setShowProductModal}
          setProductSub={setProductSub}/>
      </div>

      {basket.products.length == 0 ? (
        <></>
      ) : (
        <div className="main-bottom" onClick={BasketHandler}>
          <h1>View Basket</h1>
          <h1>
            £{totalBPrice.toFixed(2)} / {basket.products.length}{" "}
            Item
          </h1>
        </div>
      )}

      <div
        className="lang-btn btn"
        onClick={() => setShowLangModal(!showLangModal)}
      >
        Lg
      </div>

       {showProductModal && (
        <ProductModal
          setShowProductModal={setShowProductModal}
          setProductSub={productSub}
          showProductModal={showProductModal}
        />
      )}

      <LangModal
      setShowLangModal={setShowLangModal}
        showLangModal={showLangModal}
      />


    </div>
  )
}

export default Home
