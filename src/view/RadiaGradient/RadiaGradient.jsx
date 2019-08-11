import React from 'react'
import style from './RadiaGradient.module.scss'

export default function RadiaGradient() {
  return (
    <div className={style.gradient}>
      <svg width="300" height="300">
        <defs>
          <radialGradient id="grad2" cx="0.5" cy="0.5" r="0.5" fx="0.8" fy="0.2">
            <stop offset="0" stopColor="rgb(20, 151, 252)" />
            <stop offset="0.5" stopColor="rgb(164, 105, 190)" />
            <stop offset="1" stopColor="rgb(255, 140, 0)" />
          </radialGradient>
        </defs>
        <rect x="100" y="100" width="200" height="150" fill="url(#grad2)" />
      </svg>
    </div>
  )
}
