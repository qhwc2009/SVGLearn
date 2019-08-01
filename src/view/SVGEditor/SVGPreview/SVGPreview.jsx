import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
// import style from './SVGPreview.module.scss'

const defaultAttrs = {
  fill: '#ffffff',
  stroke: '#ff0000'
}

function SVGPreview({ id, type, config, onClick }) {
  const handleClick = useCallback(() => {
    onClick(id)
  }, [id, onClick])
  const Type = useMemo(() => type, [type])
  return <Type onClick={handleClick} {...config} {...defaultAttrs} />
}

SVGPreview.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default React.memo(SVGPreview)
