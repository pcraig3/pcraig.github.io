import Layout from '../components/layout'
import ListLink, { lineListsLeft } from '../components/listLink'

const List = () => (
  <Layout title="preferences of paul craig" styles={lineListsLeft}>
    <h1>Preferences</h1>

    <ul>
      <ListLink
        h2="Things I like"
        subheading={
          <span>
            Love it <span aria-hidden="true">❤️</span>
          </span>
        }
        href="/lists-things-i-like"
      />
      <ListLink h2="Things I don’t like" subheading="omg pls no" href="/lists-things-i-dont-like" />
    </ul>
  </Layout>
)

export default List
