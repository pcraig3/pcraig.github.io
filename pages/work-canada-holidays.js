import Link from 'next/link'
import Post from '../components/post'

const WorkCH = () => (
  <Post
    h1="canada-holidays.ca"
    subheading="Statutory holidays for Canadians"
    title="canada-holidays.ca — paul craig"
    imgSrc={require('../public/img/hols.png')}
    imgAlt="Screenshot of canada-holidays.ca"
    linkText="See upcoming Canadian statutory holidays"
    href="https://canada-holidays.ca/"
  >
    <p>
      Since September 2019, I’ve been the cleanest-designed authority on Canada’s stat holidays:
      helping working-class canucks sleep in, have afternoon barbeques, drive to Peterborough, or
      whatever else you might do on a 3-day weekend.
    </p>
    <p>
      Inspired by the popular{' '}
      <a href="https://www.gov.uk/bank-holidays" target="_blank" title="UK bank holidays">
        bank holidays
      </a>{' '}
      page on GOV.UK, I initially built{' '}
      <a href="https://next-holidays-7qr7hdv3aa-ue.a.run.app/" target="_blank">
        a little Next.js app
      </a>{' '}
      as part of a technical exploration for{' '}
      <Link href="/work-cds-claim-tax-benefits">a project with the Canada Revenue Agency</Link>.
    </p>
    <p>
      Originally a Java API + React UI multi-container microservice thing, it made for a good
      reference architecture but was overly complex for long-term occasional maintainence. So I
      smushed both halves into{' '}
      <a href="https://github.com/pcraig3/hols/" target="_blank">
        a zippy little Node app
      </a>{' '}
      that serves JSON && HTML with minimal faff and major SEO (on some search engines{' '}
      <span aria-hidden="true">🦆</span>).
    </p>
    <p>
      <a href="https://canada-holidays.ca/" target="_blank">
        canada-holidays.ca
      </a>{' '}
      is a small but instructive example of a soup-to-nuts modern web app. It was quick to build,
      fast to release, it auto-deploys on merge, it’s hella accessible, it’s iterated based on user
      feedback, and it doesn’t solve problems it doesn’t have. Currently it’s{' '}
      <a
        href="https://www.bing.com/search?q=canada+holidays&qs=n&form=QBRE&sp=-1&pq=canada+holidays+2020&sc=8-20&sk=&cvid=E814AF7AD640473499B967E91A68CE52"
        target="_blank"
        title="search terms 'canada holidays' on bing"
      >
        #3 on Bing dot com
      </a>
      , so it might be coming soon to an Edge browser near you.
    </p>
    <p>
      If you have issues with the font rhythm, take it up with{' '}
      <a href="http://tylerbenning.com/" target="_blank">
        Tyler Benning
      </a>
      .
    </p>
  </Post>
)

export default WorkCH
