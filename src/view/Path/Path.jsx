import React from 'react'
import style from './Path.module.scss'

export default function Path() {
  return (
    <div className={style.path}>
      <svg width="100%" height="100%">
        <path
          d="M200 200 h 300 v 100 l 100 -100 M 0 0 L 200 200"
          stroke="red"
          fill="transparent"
        />
        <path
          d="M400 300 h100 l -100 100 v -100 M 500 300 A 100 100 0 0 1 400 400"
          stroke="red"
          fill="transparent"
        />
        <path d="M700 200 Q 700 300 800 200 T 900 200 T 1000 300 C 800 500 700 600 900 600 S 1100 200 1200 400 Z" stroke="red" fill="blue" />
      </svg>
    </div>
  )
}
