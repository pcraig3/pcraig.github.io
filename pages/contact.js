import Link from 'next/link'
import { css } from '@emotion/react'
import { spacing, pointLeftJustifiedLinks } from '../styles/utils'
import Layout from '../components/layout'

const mainStyles = css`
  span {
    display: block;
    margin-bottom: ${spacing.xxs};
  }

  ${pointLeftJustifiedLinks};
`
const Contact = () => (
  <Layout title="contact paul craig" styles={mainStyles}>
    <h1>Contact</h1>
    <p>
      <span>Email</span>
      <span>
        <Link href="mailto:paul@pcraig3.ca" title="pls no spam">
          paul
          <wbr />
          @pcraig3.ca
        </Link>
      </span>
    </p>
    <p>
      <span>Twitter</span>
      <span>
        <Link href="https://twitter.com/pcraig3" title="pls retweet me">
          @pcraig3
        </Link>
      </span>
    </p>
    <p>
      <span>Instagram</span>
      <span>
        <Link href="https://www.instagram.com/paulgorica" title="pls follow me">
          @paulgorica
        </Link>
      </span>
    </p>
    <p>
      <span>GitHub</span>
      <span>
        <Link href="https://www.github.com/pcraig3" title="pls ⭐ me">
          pcraig3
        </Link>
      </span>
    </p>
    <p>
      <span>
        Facebook (if you <em>must</em>. 🤷)
      </span>
      <span>
        <Link href="https://www.facebook.com/PaulMCraig" title="pls be my friend">
          PaulMCraig
        </Link>
      </span>
    </p>
  </Layout>
)

export default Contact
