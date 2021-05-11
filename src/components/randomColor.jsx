import React from 'react'
import PropTypes from 'prop-types'

const randomColor = ({background}) => (
  <div style={ { background } }>

  </div>
)

randomColor.propTypes = {
  background: PropTypes.string.isRequired
}

export default randomColor

