import React from 'react'
import PropTypes from 'prop-types'

const RandomColor = ({color}) => (
  <div style={{ 
    color,
    width: '100px',
    height: '100px'
    }}>

  </div>
)

RandomColor.propTypes = {
  color: PropTypes.string.isRequired,
}

export default RandomColor

