import React from 'react'
import PropTypes from 'prop-types'
import { visuallyhidden, visuallyhiddenUntilFocus } from './__styles'

class SkipLink extends React.Component {
  constructor(props) {
    super(props)
    this.focusEl = React.createRef()
  }

  componentDidMount() {
    this.focusEl.current.focus()
  }

  render() {
    const props = { tabIndex: -1, className: visuallyhidden }

    return (
      <React.Fragment>
        <span ref={this.focusEl} {...props}>
          {this.props.title}
        </span>
        <a href="#content" className={visuallyhiddenUntilFocus}>
          Skip to main content
        </a>
        <a href="#footer" className={visuallyhiddenUntilFocus}>
          Skip to main navigation
        </a>
      </React.Fragment>
    )
  }
}

SkipLink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SkipLink
