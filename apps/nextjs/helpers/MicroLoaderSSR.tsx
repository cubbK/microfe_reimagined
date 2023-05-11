const cheerio = require('cheerio')

// naive and fragile and broken.
export default function MicroLoaderSSR({
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
      Server side rendered, not react!!
      <div className="content" dangerouslySetInnerHTML={{ __html: body }}></div>
      {scriptsUrls.map((url: string) => (
        <script src={`${url}`}></script>
      ))}
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
  const body = $('body').html()
  return { body, scriptsUrls }
}
