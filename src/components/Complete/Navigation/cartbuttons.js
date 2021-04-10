import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'

import { useGlobalContext } from '../../../context/app_context'

const CartButtons = () => {
  const { closeSidebar } = useGlobalContext()
  return (
    <CartButtonWrapper className={`cart-btn-wrapper`}>
      {/* Shopping Cart*/}
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{12}</span>
        </span>
      </Link>

      {/* Login/Logout */}
      <button type="button" className="auth-btn" onClick={closeSidebar}>
        Login
        <FaUserPlus />
      </button>
    </CartButtonWrapper>
  )
}

const CartButtonWrapper = styled.div`
  & {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 225px;
  }
  

  .cart-btn {
    color: var(--clr-black);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-black);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
