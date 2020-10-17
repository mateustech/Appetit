import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MdAdd, MdRemove} from 'react-icons/md'

import {ContainerBar} from'./style'

export default function Index(props) {

  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(3.50)
  const [valueFormat, setValueFormat] = useState(
    (value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  )

    
  console.log(value)

  function handleClickMore(){
    let q = quant + 1

    let som = 3.50 * q
    setValue(som)
    setQuant(q)
    setValueFormat((som).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
  }

 function handleClickRemove(){
    if(quant == 1){
      setQuant(1)
    }else{
      setQuant(quant - 1)
      if(quant >= 2){
        let q = quant - 1

        let som = 3.50 * q
        setValue(som)
        setQuant(q)
        setValueFormat((som).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
      }
      
    }
    
  }

  return (
    <ContainerBar style={{
      display: props.displayB == true ? "none" : "flex"
    }}>
      <div className="btns-add-remove">
        <MdRemove 
          size={24} 
          color={quant > 1 ? "#ff8822" : "rgba(0, 0, 0, 0.56)"}
          onClick={handleClickRemove} 
        />

        <p>{quant}</p>

        <MdAdd 
          size={24} 
          color="ff8822"
          onClick={handleClickMore}
        />
      </div>
      
      <Link to="/novo-pedido/checkout-product">
        Adicionar
          <span>{valueFormat}</span>
      </Link>
    </ContainerBar>
  )
}
