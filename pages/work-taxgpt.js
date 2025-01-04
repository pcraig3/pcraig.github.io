import Post from '../components/post'

const WorkGHD = () => (
  <Post
    h1="TaxGPT.ca"
    subheading="Canada’s friendly AI tax chatbot"
    title="TaxGPT.ca — paul craig"
    imgSrc={require('../public/img/taxgpt.png')}
    imgAlt="Screenshot of taxgpt.ca"
    linkText="TaxGPT.ca"
    href="https://taxgpt.ca"
  >
    <p>In March 2023, I released TaxGPT: a free and friendly AI tax chatbot for Canada.</p>
    <p>
      TaxGPT draws upon{' '}
      <a
        href="https://cds-snc.github.io/claim-tax-benefits-documentation/research/"
        target="_blank"
      >
        existing government research
      </a>{' '}
      which found that people often lack confidence to file on their own: perceiving the process as
      overly complex, with a high chance of facing financial or legal penalties if making a mistake.
      TaxGPT introduces Canadians to taxes in an approachable conversational format, using plain
      language and publicly-available information to return tax-related answers.
    </p>
    <p>
      The site itself is built in{' '}
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>
      , the API uses{' '}
      <a href="https://expressjs.com/" target="_blank">
        express.js
      </a>
      , and the admin backend uses{' '}
      <a href="https://www.djangoproject.com/" target="_blank">
        Django
      </a>
      .
    </p>
    <p>Here’s how TaxGPT works:</p>
    <ol>
      <li>Someone asks a question</li>
      <li>
        TaxGPT searches for relevant information in its knowledge base (a curated list of{' '}
        <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank">
          CRA
        </a>{' '}
        public information)
      </li>
      <li>TaxGPT reads that information and uses it to return an answer</li>
      <li>TaxGPT also returns links to the CRA pages it thinks are most relevant</li>
    </ol>
    <p>
      <strong>TaxGPT has answered over 30,000 questions</strong> from 2023 to present and made it
      into the National Post: “
      <a
        href="https://nationalpost.com/news/canada/ottawa-developer-designs-chatbot-to-help-canadians-file-taxes"
        target="_blank"
      >
        Ottawa developer designs chatbot to help Canadians file their taxes for free
      </a>
      ”.
    </p>
    <p>
      Overall, TaxGPT has generated plenty of interest, and furthered Canada’s conversation about
      simpler tax filing, and continues to help Canadians every day!
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
