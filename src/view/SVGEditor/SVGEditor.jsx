import React, { useState, useMemo, useCallback } from 'react'
import _ from 'lodash'
import { Button, Slider } from 'antd'
import { uuid } from 'utils/util'

import SVGPreview from './SVGPreview/SVGPreview'

import style from './SVGEditor.module.scss'

const svgTypeConfig = {
  rect: { x: 10, y: 10, width: 200, height: 100, rx: 0, ry: 0 },
  circle: { cx: 200, cy: 200, r: 50 },
  ellipse: { cx: 200, cy: 200, rx: 80, ry: 30 },
  line: { x1: 10, y1: 10, x2: 100, y2: 100 }
}

export default function SVGEditor() {
  const [svgList, setsvgList] = useState([])
  const typeList = useMemo(() => _.map(svgTypeConfig, (v, k) => k), [])

  const [selectedSVGId, setselectedSVGId] = useState(null)
  const selectedSVG = useMemo(() => svgList.find(i => i.id === selectedSVGId), [
    selectedSVGId,
    svgList
  ])

  const handleClickCreateSVG = useCallback(
    type => {
      const id = uuid()
      const newSVGConfig = {
        id,
        type,
        config: svgTypeConfig[type]
      }
      const newSvgList = [...svgList, newSVGConfig]
      setsvgList(newSvgList)
      setselectedSVGId(id)
    },
    [svgList]
  )

  const handleChangeAttr = useCallback(
    (type, value) => {
      const newSelectedSvg = selectedSVG
      newSelectedSvg.config = { ...newSelectedSvg.config, [type]: value }
      setsvgList([...svgList])
    },
    [selectedSVG, svgList]
  )

  return (
    <div className={style.svgEditor}>
      <div className={style.sideBar}>
        <div className={style.form}>
          <div className={style.formTitle}>创建图形</div>
          <div className={style.formContent}>
            {typeList.map(type => (
              <Button
                className={style.typeButton}
                type="primary"
                key={type}
                onClick={() => {
                  handleClickCreateSVG(type)
                }}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className={style.form}>
          <div className={style.formTitle}>编辑形状</div>
          {selectedSVGId ? (
            <div className={style.formContent}>
              {_.map(_.get(selectedSVG, 'config', {}), (v, k) => (
                <div className={style.formComponent} key={k}>
                  <span className={style.componentTitle}>{k}:</span>
                  <Slider
                    style={{ flex: 1 }}
                    min={0}
                    max={800}
                    onChange={value => {
                      handleChangeAttr(k, value)
                    }}
                    value={v}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={style.centerContent}>请先创建形状</div>
          )}
        </div>

        {/* <div className={style.form}>
          <div className={style.formTitle}>编辑属性</div>
          <div className={style.formContent}>
            {typeList.map(type => (
              <Button
                className={style.typeButton}
                type="primary"
                key={type}
                onClick={() => {
                  handleClickCreateSVG(type)
                }}
              >
                {type}
              </Button>
            ))}
          </div>
        </div> */}

      </div>
      <div className={style.svgArea}>
        <svg className={style.svgPreview}>
          {svgList.map(svg => (
            <SVGPreview key={svg.id} id={svg.id} type={svg.type} config={svg.config} onClick={(id) => {setselectedSVGId(id)}} />
          ))}
        </svg>
      </div>
    </div>
  )
}
