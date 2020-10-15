import styled from 'styled-components'

export const ContainerBar = styled.div` 
  width: 100%;
  height: 68px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #FAFAFA;

  position: sticky;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 40px;

  .btns-add-remove{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      margin: 0 28px;
    }

    svg{
      cursor: pointer;
    }
  }

  button{
    background: #ff8822;
    color: #fff;
    border-radius: 5px;
    border: none;

    width: 204px;
    height: 48px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.2rem;

    cursor: pointer;
  }
  
`