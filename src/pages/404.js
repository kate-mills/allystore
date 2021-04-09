/* eslint react/jsx-pascal-case: "off" */

import * as React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import {SEO, Layout} from "../components"

const ErrorPage = () => {
  return (
  <Layout>
    <SEO title="Opps!" />
      <Wrapper className="page-100">
        <section>
          <h1>Oops!</h1>
          <h3>Sorry, the page you tried cannot be found.</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
