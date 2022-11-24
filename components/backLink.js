import PropTypes from 'prop-types'
import Link from 'next/link'
import { pointLeftJustifiedLinks } from '../styles/utils'

const BackLink = ({ href = '/' }) => (
  <div css={pointLeftJustifiedLinks}>
    <Link href={href}>{href === '/' ? 'Start over' : `Back to ${href}`}</Link>
  </div>
)

BackLink.propTypes = {
  href: PropTypes.string,
}

export default BackLink
