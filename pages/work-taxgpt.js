import Post from '../components/post'

const WorkGHD = () => (
  <Post
    h1="TaxGPT.ca"
    subheading="Helping Canadians find free tax-filing options"
    title="TaxGPT.ca — paul craig"
    imgSrc={require('../public/img/taxgpt.png')}
    imgAlt="Screenshot of taxgpt.ca"
    linkText="TaxGPT.ca"
    href="https://taxgpt.ca"
  >
    <p>
      In March 2023, I released TaxGPT: a friendly AI-lite chatbot to give Canadians advice on how
      to file their taxes for free.
    </p>
    <p>
      TaxGPT draws upon{' '}
      <a
        href="https://cds-snc.github.io/claim-tax-benefits-documentation/research/"
        target="_blank"
      >
        existing government research
      </a>
      , which found that people often lack confidence to file on their own: perceiving the process
      as overly complex, with a high chance of facing financial or legal penalties if making a
      mistake. TaxGPT introduces Canadians to taxes in an approachable conversational format, using
      plain language and affirming statements to recommend relevant methods to file taxes for free.
    </p>
    <p>
      The site itself is built in{' '}
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>
      , and the “chat” part of it is based on a script that I wrote and put together with{' '}
      <a href="https://typebot.io" target="_blank">
        Typebot
      </a>
      . I spent some time testing out ChatGPT, eventually finding it wasn’t accurate enough for a
      full conversation, but it <em>is</em> pretty good at providing general advice. After receiving
      relevant recommendations, users can ask a question to TaxGPT which returns an answer via{' '}
      <a href="https://platform.openai.com/docs/api-reference" target="_blank">
        the ChatGPT API
      </a>
      .
    </p>
    <p>
      TaxGPT is intended to help Canadians throughout the 2023 tax filing season (February 20 — May
      1, 2023), so I am currently still iterating and gathering feedback. Once tax season ends, I
      will update this page with outcomes.
    </p>
    <p>
      The cute maple leaf is a{' '}
      <a href="https://www.tylerbenning.com" target="_blank">
        Tyler Benning
      </a>{' '}
      original.
    </p>
  </Post>
)

export default WorkGHD
