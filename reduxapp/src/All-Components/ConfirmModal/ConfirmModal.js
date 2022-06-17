import React from 'react'
import './ConfirmModal.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import allTheActions from '../../State-Management/AllActions/main';

const ConfirmModal = ({ showCModal, setShowCModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const placeOrderHndler = () => {
    dispatch(allTheActions.basket.clearTheBasket());
    navigate("/");
  }


  return (
     <>
      <div
        className={showCModal ? "confirm-modal view-confirm-modal" : "confirm-modal"}
      ></div>
      <div
        className={showCModal ? "confirm-modal-content view-confirm-modal-content"
            : "confirm-modal-content"
        }>
        <div className="confirm-modal-content-d">
          <h1>Confirm Order</h1>
          <img src="../../images/confirm.png" alt="imge" />
          <h3>By placing this order you agree that you are present in Kings Arms and over 18 years old.</h3>
          <div className="confirm-modal-content-d-buttons">
            <button className="btn" onClick={() => setShowCModal(false)}>
              Cancel
            </button>
            <button className="btn active" onClick={placeOrderHndler}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmModal
