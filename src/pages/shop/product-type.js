import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Seo, Layout } from '../../components'

const ShopProductTypePage = () => (
  <Layout>
    <Seo title="Shop by Product Type" />
    <StaticImage
      src="../../images/icon.png"
      width={300}
      quality={95}
      placeholder="blurred"
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Skincare Webstore icon"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Skincare Webstore</h1>
  </Layout>
)

export default ShopProductTypePage
