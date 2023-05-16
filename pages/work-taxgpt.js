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
      In March 2023, I released TaxGPT: a friendly AI-infused chatbot to give Canadians advice on
      how to file their taxes for free.
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
      full conversation, but it <em>is</em> pretty good at providing general advice. Users can ask
      tax-related questions to TaxGPT which returns an answer via{' '}
      <a href="https://platform.openai.com/docs/api-reference" target="_blank">
        the ChatGPT API
      </a>
      .
    </p>
    <p>
      TaxGPT answered over 10,000 questions during 2023’s tax-filing season (February 20 — May 1,
      2023), and even made it into the National Post: “
      <a
        href="https://nationalpost.com/news/canada/ottawa-developer-designs-chatbot-to-help-canadians-file-taxes"
        target="_blank"
      >
        Ottawa developer designs chatbot to help Canadians file their taxes for free
      </a>
      ”. Overall, TaxGPT generated plenty of interest, unexpected publicity, and furthered Canada’s
      conversation about simpler tax filing.
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
