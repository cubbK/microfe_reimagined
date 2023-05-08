// @ts-ignore
import rawScript from 'raw-loader!@micro/svelte-microfe/dist/assets/index.js'
import React from 'react'

export default function SvelteLoader() {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(rawScript)
  }, [])

  return (
    <>
      <script>{text}</script>
      <div id="@micro/svelte-microfe"></div>
    </>
  )
}
