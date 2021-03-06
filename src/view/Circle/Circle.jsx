import React from 'react'
import style from './Circle.module.scss'

export default function Circle() {
  return (
    <div className={style.circle}>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="90" fill="#39F" />

        <circle cx="70" cy="80" r="20" fill="white" />
        <circle cx="130" cy="80" r="20" fill="white" />
        <circle cx="65" cy="75" r="10" fill="black" />
        <circle cx="125" cy="75" r="10" fill="black" />

        <path
          d="M 50 140 A 60 60 0 0 0 150 140"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  )
}
