import Post from '../components/post'

const WorkSCLabs = () => (
  <Post
    h1="Service Canada Labs"
    subheading="User testing for future Canada.ca services"
    title="Service Canada Labs — paul craig"
    imgSrc={require('../img/labs.png')}
    imgAlt="Screenshot of the English Service Canada Labs home page"
    linkText="Home — Service Canada Labs"
    href="https://alpha.service.canada.ca/home"
  >
    <p>
      In July 2021, my team released{' '}
      <a href="https://alpha.service.canada.ca/home" target="_blank">
        Service Canada Labs
      </a>
      , the first cloud native product shipped at{' '}
      <a href="https://www.canada.ca/en/employment-social-development.html" target="_blank">
        Employment and Social Development Canada (ESDC)
      </a>
      , opening the door for agile prototyping and user testing in an old-school department.
    </p>
    <p>
      Working at ESDC was more of a hands-off leadership role than I am used to: more meetings, more
      word docs, more stakeholders, and{' '}
      <a
        href="https://github.com/pcraig3?tab=overview&from=2021-02-15&to=2021-08-12"
        target="_blank"
      >
        less GitHub contributions
      </a>
      . As Senior Technical Advisor, I was responsible for building teams, creating tech standards,
      overseeing development, and, ultimately, getting things shipped.
    </p>
    <p>
      Service Canada Labs is built in{' '}
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>{' '}
      using{' '}
      <a href="https://strapi.io" target="_blank">
        Strapi CMS
      </a>{' '}
      for its listing upcoming prototypes. It’s tested using{' '}
      <a href="https://www.cypress.io" target="_blank">
        Cypress
      </a>{' '}
      and{' '}
      <a href="https://www.deque.com/axe/" target="_blank">
        axe
      </a>{' '}
      , and it uses Azure DevOps to build and deploy containers into App Service. Because this was a
      precendent-setting deployment (read: cloud is new for the dept), I was also Chief of
      Scribbling for the oodles of requested technical documentation.
    </p>
    <p>
      During my 6-month tenure, I stood up 3 different development teams, led sprint plannings,
      reviews and retros, wrote docs, reviewed code, liased with stakeholders, and got our first
      product shipped on time and{' '}
      <a href="https://github.com/DTS-STN/Alpha-Site" target="_blank">
        in the open
      </a>
      .
    </p>
  </Post>
)

export default WorkSCLabs
