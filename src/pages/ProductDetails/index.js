import React from 'react';

import  './style.css';

import SideBar from '../../components/SideBar/SideBar'
import HeaderImg from '../../components/HeaderImg'
import Painel from '../../components/PainelD'
import PainelProduct from '../../components/PainelProduct'

function NewOrder() {
  return (
      <div className="container_new_order">
        <div className="side">
          <SideBar />
        </div>
        
        <div className="container_order main_new_order">          
        
          <div className="container_main">

            <div class="abstract_painel">
              <Painel className="painel" showIconBack  />
            </div>
            
            <div className="products">
              <HeaderImg /> 
              <PainelProduct 
                title="Detalhes do pedido" 
                p="Aproveite para adicionar alguma observação para este pedido, caso queira."
                passo={2}
                h6="O que você está vendendo?"
                showIconBack
                route="/novo-pedido"
              />
            </div>
   
          </div>
        </div>
      </div>
  );
}

export default NewOrder;