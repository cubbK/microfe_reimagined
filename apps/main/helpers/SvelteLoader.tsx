// @ts-expect-error
import indexFile from '@micro/svelte-microfe/dist/index.html'
import { useEffect } from 'react'

export default function SvelteLoader({ id }: { id: string }) {
  const scriptRegex = /<script.*src="(.*?)"><\/script>/
  const cssRegex = /<link rel="stylesheet".*href="(.*?)">/
  console.log({ indexFile })
  const scriptFilePath = indexFile.match(scriptRegex)[1]
  const cssFilePath = indexFile.match(cssRegex)[1]

  //   useEffect(() => {
  //     const scriptText = import(
  //       `@micro/svelte-microfe/dist${scriptFilePath}`
  //     ).then((module) => {
  //       console.log(module)
  //     })
  //   }, [scriptFilePath, cssFilePath])
  console.log({ scriptFilePath, cssFilePath })
  return <div>123</div>
}
