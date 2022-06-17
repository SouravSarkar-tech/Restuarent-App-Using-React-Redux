import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import allTheActions from '../../State-Management/AllActions/main';
import './LangModal.css'
import { LOCALES } from '../../i18n/locales';

const LangModal = ({ setShowLangModal, showLangModal }) => {

const dispatch = useDispatch();
const lang = useSelector((state) => state.lang);

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
            className={lang == LOCALES.ENGLISH ? "btn active" : "btn"}
            onClick={() => languageHandler( LOCALES.ENGLISH)}
          >
            <h3>English</h3>
          </button>
          <button
            className={lang ==  LOCALES.PORTUGUESE ? "btn active" : "btn"}
            onClick={ () => languageHandler( LOCALES.PORTUGUESE)}
          > 
            <h3>Portuguese</h3>
          </button>
          <button
            className={lang ==  LOCALES.FRENCH ? "btn active" : "btn"}
            onClick={ () => languageHandler( LOCALES.FRENCH)}
          >
                <h3>French</h3>
          </button>
        </div>
      </div>   
    </>
  )
}

export default LangModal
