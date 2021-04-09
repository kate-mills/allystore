/* eslint react/jsx-pascal-case: "off" */

import * as React from "react"
import { Link } from "gatsby"
import {SEO, Layout} from "../components"

const AboutPage = () => {
 return (
  <Layout>
    <SEO title="About" />
    <h1>About Skincare Webstore</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default AboutPage
