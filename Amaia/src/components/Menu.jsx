import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from './Context'
import { useTranslation } from 'react-i18next'

function menu(props) {

  const {t, i18n} = useTranslation()

  const {handleChangeLng} = useContext(Context)
  return (
    <div className='menu-container' >
        <div className='quit' onClick={props.open} style={{marginLeft:"-2rem"}}>X</div>
        <ul className='menu' >
            <li><Link className='link' to="/products">{t("products")}</Link></li>
            <li><Link className='link' to="/contact">{t("contact")}</Link></li>
            <li><Link className='link' to="/cart">{t("cart")}</Link></li>
            <li className='link' style={{marginTop:"25px", fontSize: "2.7vw"}}>{t("language")}</li>
            <select className="language" style={{flex: "0", width: "70%"}} defaultValue="Language">
              <option value="sp" onClick={e => handleChangeLng(e.value)} selected>{t("spanish")}</option>
              <option value="en" onClick={e => handleChangeLng(e.value)}>{t("english")}</option>
            </select>
        </ul>
    </div>
  )
}

export default menu