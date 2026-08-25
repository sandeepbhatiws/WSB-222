import React, { useState } from 'react'

export default function ShowHidePassword() {

    const [passwordType, setPasswordType] = useState(true);

    var changePassword = () => {
        setPasswordType(!passwordType)
    }

    var [text1, setText1] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo quae nulla voluptates porro dolorem, aperiam inventore eos recusandae illo qui nam sapiente a aut vel ab labore exercitationem dolor.');
    
    var [text2, setText2] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos totam numquam quasi ipsa voluptatum maiores nihil, repellendus quibusdam dignissimos inventore eos laudantium expedita magni temporibus incidunt modi nobis fuga natus.')

    const dataSwap = () => {
        var a = text1;
        var b = text2;

        setText1(b);
        setText2(a);
    }

    const copyCut = (event) => {
        setText1(event.target.value)
    }

  return (
    <>
        <input onKeyUp={ copyCut }/>

        <div>
            <div style={{ border : '1px solid black', padding : '15px' }}>{ text1 }</div>

            <div style={{ border : '1px solid black', padding : '15px' }}>{text2}</div>

            <button onClick={ dataSwap }>Data Swap</button>
        </div>

        
      

      <input type={ passwordType ? 'text' : 'password' }/>
      <button onClick={ changePassword } >{ passwordType ? 'Hide Password' : 'Show Password' }</button>
    </>
  )
}
