import React from 'react'
import styled from 'styled-components'

const CreditContainer = styled.div`
  padding: 10px 15px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #bbb;
  font-size: 0.8rem;

  & svg {
    color: rgb(247, 2, 119);
  }

  & a {
    color: rgb(30, 161, 241);
    font-weight: bold;
    text-decoration: none;
  }

  & > div:nth-child(2) {
    margin-top: 7px;

    & > a {
      color: #777;
      margin: 0 7px;
    }
  }
`

const Footer = () => {
  return (
    <CreditContainer>
      <div>DeFiQuant todos os direitos reservados</div>
    </CreditContainer>
  )
}

export default Footer
