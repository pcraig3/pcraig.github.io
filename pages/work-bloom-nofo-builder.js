import Post from '../components/post'

const WorkCH = () => (
  <Post
    h1="NOFO Builder"
    subheading="Accessible grant documents for HHS"
    title="NOFO Builder — paul craig"
    imgSrc={require('../public/img/nb.png')}
    imgAlt="Screenshot of a document in the NOFO Builder"
    linkText="The NOFO Builder is invite-only"
    href="https://nofo.rodeo"
  >
    <p>
      In December 2023, I shipped the{' '}
      <a href="https://nofo.rodeo" target="_blank">
        NOFO Builder
      </a>
      , a first-of-its-kind document converter for publishing accessible PDF grants on{' '}
      <a href="https://grants.gov" target="_blank">
        Grants.gov
      </a>
      .
    </p>
    <p>
      A ‘Notice of Financial Opportunity’ (NOFO) provides government funding for certain projects or
      activities (similar to an{' '}
      <a
        aria-label="Request for Proposal"
        href="https://www.investopedia.com/terms/r/request-for-proposal.asp"
        target="_blank"
      >
        RFP
      </a>
      ). Companies bid on the NOFO for a chance to win funding.
    </p>
    <p>
      NOFO documents are typically written in Microsoft Word but must be published on Grants.gov as
      accessible (
      <a href="https://www.section508.gov/manage/laws-and-policies/" target="_blank">
        508-compliant
      </a>
      ) PDFs.
    </p>
    <p>
      Converting a Word doc to a PDF should be simple, but creating an accessible, tagged PDF of
      this length can involve days of tedious manual formatting by an expert practitioner.
    </p>
    <p>
      My conversion pipeline streamlines this publishing process by automating the majority of
      accessibility tagging: creating a (nearly) one-click Word-2-accessible-PDF conveyor belt. With
      the NOFO Builder, creating a compliant, publishable NOFO takes minutes, not days.
    </p>
    <p>
      The NOFO Builder is a{' '}
      <a href="https://www.djangoproject.com/" target="_blank">
        Django
      </a>{' '}
      app that owes a huge debt to{' '}
      <a href="https://github.com/mwilliamson/python-mammoth" target="_blank">
        python-mammoth
      </a>{' '}
      and{' '}
      <a href="https://www.princexml.com/" target="_blank">
        PrinceXML
      </a>
      . It uses the super duper{' '}
      <a href="https://designsystem.digital.gov/" target="_blank">
        US Web Design System
      </a>{' '}
      to bootstrap its clean UI.
    </p>
    <p>
      The NOFO Builder is an integral part of{' '}
      <a
        href="https://federalnewsnetwork.com/management/2024/04/hhs-proves-nofos-can-be-less-complex-easier-for-applicants/"
        target="_blank"
      >
        HHS’ Simpler NOFOs initiative
      </a>{' '}
      to radically simplify its grant documents for a better applicant experience. As of December
      2024, the NOFO Builder has created over 140 grants published to Grants.gov, with a combined
      estimated total funding of over $5.3 billion USD.
    </p>
    <p>
      The NOFO Builder is invite-only, but the source code is available on{' '}
      <a href="https://github.com/HHS/simpler-grants-pdf-builder" target="_blank">
        the Health and Human Services’ (HHS) GitHub page
      </a>
      .
    </p>
  </Post>
)

export default WorkCH
