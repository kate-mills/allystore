import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'

import { useAppContext } from '../../../context/app_context'

const CartButtons = () => {
  const { closeSidebar } = useAppContext()
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
    align-items: center;
    color: var(--clr-black);
    display: flex;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
  }
  .cart-container {
    align-items: center;
    display: flex;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    align-items: center;
    background: var(--clr-primary-8);
    border-radius: 50%;
    color: var(--clr-white);
    display: flex;
    font-size: 0.75rem;
    height: 16px;
    justify-content: center;
    padding: 12px;
    position: absolute;
    right: -16px;
    top: -10px;
    width: 16px;
  }
  .auth-btn {
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--clr-black);
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
