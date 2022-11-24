import Post from '../components/post'

const WorkCAP = () => (
  <Post
    h1="COVID Alert Portal"
    subheading="Curbing COVID in Canada"
    title="COVID Alert Portal — paul craig"
    imgSrc={require('../public/img/portal.png')}
    imgAlt="Screenshot of the COVID Alert Portal"
    linkText="Curbing COVID in Canada"
  >
    <p>
      Between June 2020 and January 2021, I was Tech Lead for the COVID Alert Portal: the hippest “
      <a
        href="https://ottawa.citynews.ca/local-news/ontario-working-to-expand-awareness-influence-downloads-of-covid-alert-app-2796954"
        target="_blank"
      >
        made-in-Ontario
      </a>
      ” exposure notification app this side of the Rideau river. Whereas the{' '}
      <a
        href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html"
        target="_blank"
      >
        COVID Alert
      </a>{' '}
      <em>app</em> was generally available to conscientious canucks, <em>the Portal</em> allowed
      healthcare workers to generate one-time keys for diagnosed patients.
    </p>
    <p>
      It was built as a fun{' '}
      <a
        href="https://github.com/cds-snc/covid-alert-portal"
        title="open-source on GitHub"
        target="_blank"
      >
        open-source
      </a>{' '}
      Django app deployed on an AWS backend (less fun), with an robust automated testing and
      deployment pipeline. The Portal’s behaviour was more commodified than other parts of the
      system, so choosing the well-understood{' '}
      <a href="https://www.djangoproject.com/" target="_blank">
        Django
      </a>{' '}
      framework allowed us to get going quickly and build sustainably as we rapidly developed our
      MVP over a few hectic weeks. With the time we saved, we freed the team up to work on
      higher-level problems, like robust test cases, reusable infrastructure, security processes,
      and{' '}
      <a
        href="https://apolitical.co/solution-articles/en/making-information-easy-to-see-and-hear"
        target="_blank"
      >
        prioritizing accessibility
      </a>
      .
    </p>
    <p>The Portal was one third of the holistic COVID Alert ecosystem:</p>
    <ul>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-app"
          title="the COVID Alert app on GitHub"
          target="_blank"
        >
          the app
        </a>{' '}
        was user-facing: it kept track of nearby devices for 14 days, and looked for matching
        devices stored on the server.
      </li>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-server"
          title="the COVID Alert server on GitHub"
          target="_blank"
        >
          the server
        </a>
        , which was owned by CDS: it stored random IDs uploaded by diagnosed patients who were given
        one-time keys.
      </li>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-portal"
          title="the COVID Alert portal on GitHub"
          target="_blank"
        >
          the portal
        </a>{' '}
        for healthcare workers: it generated one-time keys that affected patients could enter to
        upload their data.
      </li>
    </ul>
    <p>
      The Portal went into production for Ontario on August 14, 2020, and was rolled out
      province-by-province, nationwide. Its usage varied region-by-region, but ultimately I was
      responsible for delivering a service that was accessible, secure, and available, while
      accommodating the evolving needs of our end users and provincial partners.
    </p>
    <p>
      The COVID Alert Portal helped the healthcare workers that were helping Canadians, it was
      delivered quickly in a national emergency using agile delivery methods, and it will kept doing
      what it needed to for as long as it was asked to.
    </p>
  </Post>
)

export default WorkCAP
