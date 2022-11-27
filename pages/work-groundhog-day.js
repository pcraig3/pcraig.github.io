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
      Since summer 2022, I’ve been the hottest new Groundhog Day startup, cataloguing{' '}
      <a href="https://groundhog-day.com" target="_blank">
        a comprehensive list of prognosticators
      </a>
      , making transparent their shady divinations, and{' '}
      <a href="https://groundhog-day.com/api" target="_blank">
        opening up the data
      </a>{' '}
      for academics and investigative journalists everywhere.
    </p>
    <p>
      Groundhog Day draws upon{' '}
      <a
        href="https://groundhog-day.com/history-of-groundhog-day#candlemas-the-groundhog-day-forerunner"
        target="_blank"
      >
        pre-Enlightenment era wisdom
      </a>{' '}
      in which fuzzy marmots are cross-examined by top-hatted mayors demanding weather reports. The
      data collected by GROUNDHOG‑DAY.com is therefore a matter of public record and — at long last
      — allows objective observers to separate True Groundhogs from ground-frauds.
    </p>
    <p>
      Similar to <Link href="/work-canada-holidays">canada-holidays.ca</Link>, the technology used
      is super boring:{' '}
      <a href="https://expressjs.com" target="_blank">
        express.js
      </a>{' '}
      (serving a UI and an API) and{' '}
      <a href="https://mozilla.github.io/nunjucks/" target="_blank">
        nunjucks templates
      </a>
      . I’m using{' '}
      <a href="https://cloud.google.com/run" target="_blank">
        Google Cloud Run
      </a>{' '}
      which is my favourite for standalone sites (costing pennies to run but scaling enormously when
      needed). And there’s also{' '}
      <a href="https://app.swaggerhub.com/apis/pcraig3/groundhog-day-api/" target="_blank">
        an OpenAPI schema
      </a>{' '}
      so you can build integrations to your enterprise data lake.
    </p>
    <p>
      <a href="https://groundhog-day.com" target="_blank">
        GROUNDHOG-DAY.com
      </a>{' '}
      is a cheerful and efficient webapp that does what it needs to with a good-natured wink. It’s
      super fast, super simple, it’s trivial to run but scales to millions, and it only needs
      updating once a year.
    </p>
    <p>
      Groundhog Day would look awful without my dynamite designer-collaborator{' '}
      <a href="https://www.tylerbenning.com" target="_blank">
        Tyler Benning
      </a>
      , and would never have existed at all without my cross-quarter girlfriend,{' '}
      <a href="https://www.instagram.com/rhijk/?hl=en" target="_blank">
        Rhianna Kidd
      </a>
      .
    </p>
  </Post>
)

export default WorkGHD
