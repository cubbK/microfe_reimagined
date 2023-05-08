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

  // Different bundles may use the same variable names. To avoid clashes we wrap the bundle in a function that is immediately invoked. This happens because <script> tags are not scoped, the variables are global.

  // We use an useEffect to run this only on client. More investigation needed for ssr
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
