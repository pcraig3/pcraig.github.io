import Layout from '../components/layout'
import { subheadStyles } from '../components/post'

const CV = () => (
  <Layout title="CV of paul craig">
    <h1>Paul Craig</h1>
    <p css={subheadStyles}>ship or get off the pot</p>

    <h2>work</h2>

    <p>
      <strong>Tech Lead</strong>
      <br />
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service
      </a>{' '}
      — Ottawa
      <br />
      2018 <span aria-label="to">→</span> now
    </p>
    <ul>
      <li>Technical lead on agile development teams building user-centric digital services</li>
      <li>Organizes, implements, and reviews dev work</li>
      <li>Runs project discoveries, identifies organisational barriers (and workarounds)</li>
      <li>
        Codes lots of ES6 (JS), Python <span aria-hidden="true">🐍</span>, React, CSS, HTML, and
        sometimes Java
      </li>
      <li>
        Pretty good experience setting up <abbr title="Continuous integration">CI</abbr>/
        <abbr title="Continuous deployment">CD</abbr> pipelines and cloud infrastructure
      </li>
      <li>Also I am an expert in building accessible interfaces</li>
    </ul>
    <br />

    <p>
      <strong>Senior Technical Advisor</strong>
      <br />
      <a href="https://www.canada.ca/en/employment-social-development.html">
        Employment and Social Development Canada
      </a>{' '}
      — Ottawa
      <br />
      2021 (Feb <span aria-label="to">→</span> Aug)
    </p>
    <ul>
      <li>Head of software development for all in-house agile development teams</li>
      <li>Defined products, assigned developers to teams, and oversaw technical work</li>
      <li>Picked cloud-centric tech stacks to ship early and often</li>
      <li>Planned and reviewed dev work, upskilled junior developers</li>
      <li>Collaborated across disciplines and silos to keep moving forward</li>
      <li>Presented work and justified decisions to stakeholders</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      <a href="https://gds.blog.gov.uk/about/" target="_blank">
        Government Digital Service
      </a>{' '}
      — London, UK
      <br />
      2015-18
    </p>
    <ul>
      <li>Built out a platform for public-sector procurement in Python 3</li>
      <li>Took the lead on frontend dev work (eg, the pattern library)</li>
      <li>Submitted all work as public, well-tested PRs; Reviewed others’ code</li>
      <li>Effective member of a focused, collaborative agile team</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      Western University Students’ Council (USC) — London, ON
      <br />
      2013-14
    </p>
    <ul>
      <li>Redesigned the flagship site of the students’ council</li>
      <li>Prioritized work using a design-led, user-centred process</li>
      <li>Open-sourced everything</li>
    </ul>
    <br />

    <h2>school</h2>

    <p>
      <strong>Double Major in Media Studies & Computer Science</strong>
      <br />
      Western University
      <br />
      2014
    </p>
    <br />

    <h2>tech</h2>
    <p>
      <strong>(Near) Expert</strong>
    </p>
    <ul>
      <li>
        JavaScript (ES6), Node.JS, React, HTML (+ templating), CSS, SCSS, Python, REST APIs, git,
        GitHub, accessible & responsive UIs, markdown (it counts), written communication /
        documentation / meeting notes / reports, collaborating across disciplines, empathizing with
        users
      </li>
    </ul>
    <br />

    <p>
      <strong>Pretty good at</strong>
    </p>
    <ul>
      <li>
        Docker, wireframing, CI/CD pipelines (YML), Azure, Heroku, GraphQL, PHP, WordPress, Java,
        SQL, MongoDB
      </li>
    </ul>
    <br />

    <p>
      <strong>I’ve seen it</strong>
    </p>
    <ul>
      <li>Angular, AWS, Kubernetes, Terraform, ElasticSearch, bash, Ruby, Go, .NET, C++</li>
    </ul>
    <br />

    <h2>misc.</h2>
    <p>
      I like big text designs, writing think pieces <span aria-hidden="true">🤔</span>, and my white
      Kobo Libra. I don’t want to come off as brash or anything, but I bet I know more about the
      Animorphs than you.
    </p>
    <p>
      I also enjoy{' '}
      <a href="https://www.bonappetit.com/recipe/basically-spaghetti-pomodoro" target="_blank">
        a good Pomodoro
      </a>{' '}
      (but who doesn’t?)
    </p>
  </Layout>
)

export default CV
