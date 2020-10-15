import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function index(props) {
  return (
      <Link to="/detalhes-do-produto/1">
        <li className="item_list_conteiner">
            <img src={props.img} alt="imagem-produto"/>
            <p>{props.title}</p>
        </li>
        {
          props.no_divisor ? "" : <div className="divisor_li"></div>  
        }
        
      </Link>
  )
}
