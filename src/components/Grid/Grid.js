import styled from 'styled-components'

export const Grid = styled.div`
  background: #E5E5E5;
  display: grid;
  grid-template-columns: 342px 1fr 1fr;
  min-height: 100vh; /*acho q precisa trocar*/ 
  width: 100%;

  @media(max-width: 1290px){
    display: flex;
    flex-direction: column;
  }

`