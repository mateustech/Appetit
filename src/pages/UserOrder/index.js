import React from 'react';

import SideBar from '../../components/SideBar/SideBar'
import BoxItem from '../../components/BoxItem'
import Header from '../../components/Header'
import HistoryOrder from '../../components/HistoryOrder'
import HeaderImg from '../../components/HeaderImg'

import './style.css'

function NewOrder() {
  return (
    <div className="container_user_order">
        <SideBar />

        <div className="span-sideBar"></div>

        <div className="container">
          <div className="container_main">
          <HeaderImg />
            <Header icon route="/lista-de-pedidos" title="Pedidos de Luiz" none_margin/>
            
            <HistoryOrder active date="13/05/2019">
              <BoxItem img="https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?w=1200"               
              title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>

            <HistoryOrder active date="09/05/2019">
              <BoxItem  img="https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?w=1200" 
              title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>
          </div>
        </div>
      </div>
  );
}

export default NewOrder;