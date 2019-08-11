import React from 'react'
import style from './Pattern.module.scss'

export default function Pattern() {
  return (
    <div className={style.pattern}>
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="pattern1"
            x="0"
            y="0"
            width="0.25"
            height="0.25"
            patternUnits="objectBoundingBox"
            patternContentUnits="objectBoundingBox"
          >
            <circle cx="0.01" cy="0.01" r="0.01" fill="red" />
            {/* <circle cx="10" cy="10" r="5" fill="red" /> */}
            <polygon points="0.03 0.01 0.06 0.05 0 0.05" fill="green" />
          </pattern>
        </defs>
        <rect
          x="100"
          y="100"
          width="800"
          height="300"
          fill="url(#pattern1)"
          stroke="blue"
        />
      </svg>
    </div>
  )
}
