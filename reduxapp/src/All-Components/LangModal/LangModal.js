import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import allTheActions from '../../State-Management/AllActions/main';
import './LangModal.css'

const LangModal = ({ setShowLangModal, showLangModal }) => {

const dispatch = useDispatch();
const lang = useSelector((state) => state.language);

  const languageHandler = (lang) => {
    setShowLangModal(false);
    dispatch(allTheActions.language.langset(lang));
  }


  return (
    <>
    <div
     className={
          showLangModal ? "lang-modal lang-modal-view" : "lang-modal"
        }
        onClick={() => setShowLangModal(false)}
      ></div>
      <div
        className={
          showLangModal
            ? "lang-modal-content lang-modal-content-view"
            : "lang-modal-content"
        }
      >
        <div className="lang-modal-content-name">
          <h1>Choose Language</h1>
          <button
            className={lang == "" ? "btn active" : "btn"}
            onClick={ languageHandler}
          >
            <h3>English</h3>
          </button>
          <button
            className={lang == "" ? "btn active" : "btn"}
            onClick={ languageHandler}
          > 
            <h3>Portuguese</h3>
          </button>
          <button
            className={lang == "" ? "btn active" : "btn"}
            onClick={ languageHandler}
          >
                <h3>French</h3>
          </button>
        </div>
      </div>   
    </>
  )
}

export default LangModal
