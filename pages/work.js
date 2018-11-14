import Layout from '../components/layout'
import ListLink, { lineListsLeft } from '../components/listLink'

export default () => (
  <Layout title="work by" className={lineListsLeft}>
    <h1>Work</h1>

    <ul>
      <ListLink
        h2="GOV.UK Performance Platform"
        subheading="Performing accountability"
        href="/work-govuk-performance-platform"
      />
      <ListLink
        h2="GOV.UK Digital Marketplace"
        subheading="Making it easier to buy better stuff"
        href="/work-govuk-digital-marketplace"
      />
      <ListLink
        h2="pcraig3.ca"
        subheading="Building a well-padded trophy case"
        href="/work-pcraig3ca-deprecated"
      />
      <ListLink
        h2="westernusc.ca"
        subheading="Renewing the University Students’ Council website"
        href="/work-westernuscca"
      />
      <ListLink
        h2="The Western USC Event Calendar"
        subheading="Building the best calendar in the country"
        href="/work-westernuscca-event-calendar"
      />
      <ListLink
        h2="The Involvement Compass"
        subheading="Matching Western students to Western’s clubs"
        href="/work-involvement-compass"
      />
    </ul>
  </Layout>
)
