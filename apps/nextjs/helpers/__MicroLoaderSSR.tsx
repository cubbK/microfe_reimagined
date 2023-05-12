const cheerio = require('cheerio')
import Script from 'next/script'

// naive and fragile and broken.
export default function __MicroLoaderSSR({
  body,
  scriptsUrls,
  id,
}: {
  body: string
  scriptsUrls: string[]
  id: string
}) {
  return (
    <>
      Server side rendered from nuxt!! Doesn't hydrate tho. Not sure how to fix.
      <div
        id="__nuxt"
        className="content"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
      {/* Broken. Scripts load fine but routing is not matching and it breaks.
      Not sure how to fix */}
      {/* {scriptsUrls.map((url: string) => (
        <Script key={url} src={`${url}`} />
      ))} */}
    </>
  )
}

export const fetchSSRRespose = async (id: string, url: string) => {
  const res = await fetch(url)

  const text = await res.text()
  const $ = cheerio.load(text)

  const scriptTags = $('script[src]')
  const scriptsUrls: string[] = []
  scriptTags.each((index: any, element: any) => {
    const src = $(element).attr('src')
    scriptsUrls.push(src)
  })

  $('script[src]').remove()
  let body = $('body').html()
  // me trying to fix the routing. Doesn't work
  body = body.replace(
    /basePath:"\\u002Fnuxt\\u002F"/g,
    'basePath:"\\u002Fnext\\u002F"'
  )
  console.log('body', body)
  return { body, scriptsUrls }
}
