import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Hero() {

const {t, i18n} = useTranslation()

const [hero, setHero] = useState("hero1")
const [selected, setSelected] = useState(false)



function handleChangeHero(event){
    console.log(event.target.value)
    if(event.target.value === "circle1"){
        setHero("hero1")
    }else if(event.target.value === "circle2"){
        setHero("hero2")
    }else if(event.target.value === "circle3"){
        setHero("hero3")
    }
}
  return (
    
    <div className={`${hero}-container`}>
        {/* <img src="yorey.jpg" className='hero-image'></img> */}

            <div className={hero}>
              {hero == "hero1" && <h1 className='welcome'>{t("welcome")}</h1>} 
                <div className={`${hero}-description-container`}>
                    {hero === "hero3" ? null : <div className={`${hero}-description`}>
                        <h1>Men's <span style={hero === "hero1" ? {color: "darkblue"} : null} className={`${hero === "hero1" ? null : 'collection-border'}`}>Collection</span></h1>
                        <Link to="/collection/men"><button className='see-products'>{t("products")}</button></Link>
                    </div>}
                   {hero === "hero2" ? null : <div className={`${hero}-description`}>
                        <h1>Women's <span  className={`${hero === "hero1" ? null : 'collection-border'}`}>{t("collection")}</span></h1>
                        <Link to="/collection/women"><button className='see-products'>{t("products")}</button></Link>
                    </div>}
                </div>
            </div>
            <div className='circles'>
                <button className={hero == 'hero2' ? 'selected' : `circle`} value="circle2" onClick={handleChangeHero}></button>
                <button className={hero == 'hero1' ? 'selected' : `circle`} value="circle1" onClick={handleChangeHero}></button>
                <button className={hero == 'hero3' ? 'selected' : `circle`} value="circle3" onClick={handleChangeHero}></button>
            </div>
                <div className={`background-${hero}`}></div>
        
        
    </div>
  )
}

export default Hero