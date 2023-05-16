import Layout from '../components/layout'
import { subheadStyles } from '../components/post'
import { printStyles } from '../styles/utils'

const CV = () => (
  <Layout title="CV of paul craig" styles={printStyles}>
    <h1>Paul Craig</h1>
    <div className="screen-only">
      <p css={subheadStyles}>putting the ‘AI’ in AI tax chatbot</p>
      <br />
    </div>

    <div className="print-only cv--details">
      <p>Ottawa, Ontario</p>
      <p>
        <a href="mailto:paul@pcraig3.ca">paul@pcraig3.ca</a>
      </p>
      <p>647-667-5327</p>
      <p>
        <a href="https://pcraig3.ca/work">https://pcraig3.ca/work</a>
      </p>
    </div>

    <h2>work</h2>

    <p>
      <strong>Technical Strategist</strong>
      <br />
      <a href="https://bloomworks.digital/" target="_blank">
        Bloom Works
      </a>{' '}
      — remote
      <br />
      2023 (Jan → Mar)
    </p>
    <ul>
      <li>
        Technical Strategist for the Colorado state government’s{' '}
        <a href="https://bha.colorado.gov/behavioral-health/bed-capacity-tracker">
          Behavioral Health Bed Capacity Tracker
        </a>
      </li>
      <li>
        Delivered actionable recommendations for{' '}
        <a href="https://bha.colorado.gov">Colorado’s Behavioral Health Administration</a>
      </li>
      <li>Led interviews with government administrators in peer states</li>
      <li>Conducted market analysis and research synthesis</li>
      <li>Part of a small, effective discovery team with short timelines</li>
    </ul>
    <br />

    <p>
      <strong>Technical Lead</strong>
      <br />
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service
      </a>{' '}
      — Ottawa
      <br />
      2018 <span aria-label="to">→</span> 2022
    </p>
    <ul>
      <li>
        Tech Lead on COVID Alert Portal for{' '}
        <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html">
          Canada’s COVID-19 contract tracing app
        </a>
      </li>
      <li>Technologist on agile development teams building user-centric digital services</li>
      <li>Organised, implemented, and reviewed dev work</li>
      <li>Ran project discoveries, identified organisational barriers (and workarounds)</li>
      <li>
        Coded mostly ES6 (JS), Python <span aria-hidden="true">🐍</span>, React, CSS, HTML, and
        sometimes Java
      </li>
      <li>
        Experienced in setting up <abbr title="Continuous integration">CI</abbr>/
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
      <li>Head of software development for in-house agile dev teams</li>
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
      <li>
        Developer on the{' '}
        <a href="https://www.digitalmarketplace.service.gov.uk/">Digital Marketplace</a>, the UK
        government’s procurement platform
      </li>
      <li>Built out a platform for public-sector procurement in Python 3</li>
      <li>Took the lead on frontend dev work (eg, the pattern library)</li>
      <li>Submitted all work as public, tested PRs; Reviewed others’ code</li>
      <li>Effective member of a focused, collaborative agile team</li>
    </ul>
    <br />

    <div className="display--none">
      <p>
        <strong>Developer</strong>
        <br />
        Western University Students’ Council (USC) — London, ON
        <br />
        2013-14
      </p>
      <ul>
        <li>Redesigned the flagship site of the students’ council</li>
        <li>Prioritised work using a design-led, user-centred process</li>
        <li>Open-sourced everything</li>
      </ul>
      <br />
    </div>

    <h2 class="page-break-before">side projects</h2>

    <p>
      <strong>
        <a href="https://pcraig3.ca/work-taxgpt">TaxGPT.ca</a>
      </strong>
      <br />
      AI chatbot for Canadian tax filing. Answered 10,000+ questions and was featured in{' '}
      <a href="https://nationalpost.com/news/canada/ottawa-developer-designs-chatbot-to-help-canadians-file-taxes">
        a national newspaper
      </a>{' '}
      in April 2023.
    </p>
    <p>
      <strong>
        <a href="https://pcraig3.ca/work-groundhog-day">GROUNDHOG-DAY.com</a>
      </strong>
      <br />
      The leading Groundhog Day data source, with JSON API and interactive map. Made the top 10 on{' '}
      <a href="https://news.ycombinator.com/item?id=34630409">Hacker News</a> in Feb 2023.
    </p>
    <p>
      <strong>
        <a href="https://pcraig3.ca/work-canada-holidays">Canada-holidays.ca</a>
      </strong>
      <br />
      The cleanest-designed, SEO-optimised-est source of Canadian statutory holidays. Over 1 million
      unique visits since 2019.
    </p>
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
        ChatGPT, LangChain, JavaScript (ES6), Node.JS, React, HTML (+ templating), CSS, SCSS,
        Python, REST APIs, web scraping, git, GitHub, accessible & responsive UIs, markdown (it
        counts), written communication / documentation / meeting notes / reports / presentations,
        collaborating across disciplines, empathizing with users
      </li>
    </ul>
    <br />

    <p>
      <strong>Pretty good at</strong>
    </p>
    <ul>
      <li>
        Docker, wireframing, CI/CD pipelines (YML), Azure, Heroku, GraphQL, PHP, WordPress, Java,
        SQL, MongoDB, Google Cloud
      </li>
    </ul>
    <br />

    <p>
      <strong>I’ve used it</strong>
    </p>
    <ul>
      <li>Angular, AWS, Kubernetes, Terraform, ElasticSearch, bash, Ruby, Go, .NET, C++</li>
    </ul>
    <br />

    <div className="screen-only">
      <h2>misc.</h2>
      <p>
        I like big text designs,{' '}
        <a href="https://groundhog-day.com/groundhogs">prophetic groundhogs</a>{' '}
        <span aria-hidden="true">🦫</span>, and my white Kobo Libra. I also enjoy{' '}
        <a href="https://www.bonappetit.com/recipe/basically-spaghetti-pomodoro" target="_blank">
          a good Pomodoro
        </a>{' '}
        (but who doesn’t?).
      </p>
    </div>
  </Layout>
)

export default CV
