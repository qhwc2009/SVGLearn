import React from 'react'
import _ from 'lodash'
import { random } from 'utils'
import style from './UseTag.module.scss'

export default function UseTag() {
  return (
    <div className={style.UseTag}>
      <svg
        width="100%"
        height="100%"
        viewBox="-400 -300 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <polygon
            id="star"
            points="0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2"
            fill="white"
          ></polygon>
        </defs>
        <g>
          {_.range(500).map(i => (
            <use
              key={i}
              xlinkHref="#star"
              opacity={random(0.1, 0.4)}
              transform={`translate(${random(-400, 400)}, ${random(
                -300,
                50
              )}) scale(${random(0.1, 0.6)})`}
            ></use>
          ))}
        </g>
        <g transform="translate(250, 0)">
          <defs>
            <linearGradient id="tower" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#999"></stop>
              <stop offset="1" stopColor="#333"></stop>
            </linearGradient>

            <radialGradient id="light" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="rgba(255, 255, 255, 0.8)"></stop>
              <stop offset="1" stopColor="rgba(255, 255, 255, 0)"></stop>
            </radialGradient>

            <clipPath id="light-mask">
              <polygon
                points="0 0 -400 -15 -400 15"
                fill="rgba(255, 0, 0, 0.5)"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="20s"
                  repeatCount="indefinite"
                ></animateTransform>
              </polygon>
              <circle cx="0" cy="0" r="2"></circle>
            </clipPath>
          </defs>
          <polygon points="0 0 5 50 -5 50" fill="url(#tower)"></polygon>
          <ellipse
            cx="0"
            cy="0"
            rx="300"
            ry="100"
            fill="url(#light)"
            clipPath="url(#light-mask)"
          ></ellipse>
        </g>
      </svg>
    </div>
  )
}
