import Layout from '../components/layout'
import { visuallyhidden } from '../styles/utils'
import RandomEmoji from '../components/randomEmoji'
import Link from 'next/link'

const Index = () => (
  <Layout
    title="paul craig, web developer"
    metaDescription="hi, I'm Paul. I build websites and eat aux casse-croûtes. get in touch: paul@pcraig3.ca"
  >
    <h1>
      Paul Craig<span css={visuallyhidden}>: web developer</span>
    </h1>
    <ul>
      <li>
        builds <Link href="/work">websites</Link>
      </li>
      <li>
        makes <Link href="/lists">lists</Link>
      </li>
      <li>
        chows{' '}
        <a href="https://twitter.com/pcraig3/status/1309970663600463873/photo/1" target="_blank">
          dogs
        </a>
      </li>
    </ul>
    <p aria-hidden="true">
      <RandomEmoji />
    </p>
  </Layout>
)

export default Index
