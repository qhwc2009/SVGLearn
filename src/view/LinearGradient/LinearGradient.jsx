import React from 'react'
import style from './LinearGradient.module.scss'

export default function LinearGradient() {
  return (
    <div className={style.gradient}>
      <svg width="300" height="300">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1497FC" />
            <stop offset="0.5" stopColor="#A469BE" />
            <stop offset="1" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
        <rect x="100" y="100" fill="url(#grad1)" width="200" height="150" />
      </svg>
    </div>
  )
}
