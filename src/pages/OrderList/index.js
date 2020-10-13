import React from 'react';

import SideBar from '../../components/SideBar/SideBar'
import BoxItem from '../../components/BoxItem'
import BtnAdd from '../../components/BtnAdd'
import InputSearch from '../../components/InputSearch'
import Header from '../../components/Header'
import HistoryOrder from '../../components/HistoryOrder'

import Profile from '../../assets/imgs/profile/profile.svg'

import './style.css'

class OrderList extends React.Component {
 
  render(){
    return (
      <div className="container_order_list">
        <SideBar />
        <div className="span-sideBar"></div>
        <div className="container">
          <div className="container_main">
            <Header />
            <div>
              <BtnAdd/>
              <InputSearch />
            </div>
            <HistoryOrder>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>

            <HistoryOrder>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>

            <HistoryOrder>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>
          </div>
        </div>
      </div>
    )
  }

 
}

export default OrderList;