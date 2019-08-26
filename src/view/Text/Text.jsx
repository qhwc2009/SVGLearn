import React, { useEffect, useState, useMemo, useRef } from 'react'
import style from './Text.module.scss'

export default function Text() {
  const xList = useRef([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20])
  const [dySinList, setDySinList] = useState([])
  const time = useRef(0)
  useEffect(() => {
    const arrange = (t, xList) => {
      const w = 0.02
      const s = 50
      let ly = 0
      let cy
      const yList = xList.map((item, idx) => {
        cy = -s * Math.sin(w * idx * 20 + t)
        const newY = cy - ly
        ly = cy
        return newY
      })
      return yList
    }
    const interval = setInterval(() => {
      time.current += 0.01
      const newYList = arrange(time.current, xList.current)
      setDySinList(newYList)
    }, 10)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const dy = useMemo(() => dySinList.join(' '), [dySinList])
  const dx = useMemo(() => xList.current.join(' '), [])
  return (
    <div className={style.text}>
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path stroke="#E0E0E0" fill="none" d="M 0 0 H 20 V 20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <text x="100" y="100" dx={dx} dy={dy} style={{ fontSize: '50px' }}>
          <tspan fill="red">X晨哥牛逼</tspan>
          <tspan fill="black">--</tspan>
          <tspan stroke="black" fill="transparent">真的好牛逼</tspan>
        </text>
        <path d="M 100 0 V 200 M 0 100 H 200" stroke="red" />
      </svg>
    </div>
  )
}
