import Link from 'next/link'
import Post from '../components/post'

const WorkGHD = () => (
  <Post
    h1="GROUNDHOG-DAY.com"
    subheading="The leading Groundhog Day data source"
    title="GROUNDHOG-DAY.com — paul craig"
    imgSrc={require('../public/img/ghog.png')}
    imgAlt="Screenshot of groundhog-day.com"
    linkText="Groundhog-Day.com"
    href="https://groundhog-day.com"
  >
    <p>
      Since summer 2022, GROUNDHOG-DAY.com has been the number one clean and breathable,
      machine-readable, all-regional data source for official Groundhog Day forecasts.
    </p>
    <p>
      Groundhog Day draws upon{' '}
      <a
        href="https://groundhog-day.com/history-of-groundhog-day#candlemas-the-groundhog-day-forerunner"
        target="_blank"
      >
        pre-Enlightenment-era wisdom
      </a>{' '}
      in which fuzzy marmots are cross-examined by top-hatted mayors requesting weather reports. The
      data collected by GROUNDHOG‑DAY.com is therefore a matter of public record, granting academics
      and journalists access to{' '}
      <a href="https://groundhog-day.com/groundhogs" target="_blank">
        a free and comprehensive list of prognosticators
      </a>{' '}
      and their shady divinations. Finally, evidence-based observers can separate the True
      Groundhogs from the ground-frauds.
    </p>
    <p>
      Similar to <Link href="/work-canada-holidays">canada-holidays.ca</Link>, the technology used
      is super boring:{' '}
      <a href="https://expressjs.com" target="_blank">
        express.js
      </a>{' '}
      in the backend and{' '}
      <a href="https://mozilla.github.io/nunjucks/" target="_blank">
        nunjucks templates
      </a>{' '}
      in front. Visitors can sort and filter groundhogs or predictions for a given year, not to
      mention explore the world’s only{' '}
      <a href="https://groundhog-day.com/map" target="_blank">
        GROUNDHOG MAP
      </a>
      ! For real data heads,{' '}
      <a href="https://groundhog-day.com/api" target="_blank">
        the JSON API
      </a>{' '}
      (complete with{' '}
      <a href="https://app.swaggerhub.com/apis/pcraig3/groundhog-day-api/" target="_blank">
        schema
      </a>
      ) serves up-to-the-minute prediction data with enterprise-scale reliability.
    </p>
    <p>
      <a href="https://groundhog-day.com" target="_blank">
        GROUNDHOG-DAY.com
      </a>{' '}
      is a cheerful and efficient webapp that does what it needs to without faffing around. It’s
      super fast, it’s trivial to run, it scales like crazy, it’s extra-accessible, and it’s got the
      cutest skip link of all time. It also gets me{' '}
      <a
        href="https://omny.fm/shows/cjad-800/an-awesome-resource-for-groundhog-day"
        target="_blank"
      >
        radio interviews
      </a>{' '}
      from time to time.
    </p>
    <p>
      Groundhog Day would look awful without my dynamite designer-collaborator{' '}
      <a href="https://www.tylerbenning.com" target="_blank">
        Tyler Benning
      </a>
      , and would never have existed at all without my cross-quarter girlfriend,{' '}
      <a href="https://rhianna.ca" target="_blank">
        Rhianna Jane Kidd
      </a>
      .
    </p>
  </Post>
)

export default WorkGHD
