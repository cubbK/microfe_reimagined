import React from 'react'

// Almost all the current fronend frameworks generate a bundle that hooks onto a container, usually a div with a specific id. My idea here is to let them: create the div, append the script and let it do its thing. That's how we achieve running svelte/vue/angular apps in react.

// Probably naive but it works ;D
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
