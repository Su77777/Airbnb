import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconShare = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={styleStrToObject("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;")}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path></g></svg>
  )
})

export default IconShare