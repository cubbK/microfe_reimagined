// @ts-ignore
import React from 'react'

export default function MicroLoader({
  jsRaw,
  id,
}: {
  jsRaw: string
  id: string
}) {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(`(function(){${jsRaw}})()`)
  }, [])

  return (
    <>
      <script>{text}</script>
      <div id={id}></div>
    </>
  )
}
