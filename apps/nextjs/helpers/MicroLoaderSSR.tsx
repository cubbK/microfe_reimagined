const cheerio = require('cheerio')

// naive implementation
export default function MicroLoaderSSR({
  body,
  scriptsUrls,
  id,
}: {
  body: string
  scriptsUrls: string[]
  id: string
}) {
  console.log(scriptsUrls)
  return (
    <>
      Server side rendered, not react!!
      <div className="content" dangerouslySetInnerHTML={{ __html: body }}></div>
      middle
      {scriptsUrls.map((url: string) => (
        <script src={`/about${url}`}></script>
      ))}
    </>
  )
}

export const fetchSSRRespose = async (id: string, url: string) => {
  //   const res = await fetch(url)

  //   const text = await res.text()
  //   const $ = cheerio.load(text)

  //   const scriptTags = $('script[src]')
  //   const scriptsUrls: string[] = []
  //   scriptTags.each((index: any, element: any) => {
  //     const src = $(element).attr('src')
  //     scriptsUrls.push(src)
  //   })

  //   $('script[src]').remove()
  //   const body = $('body').html()
  return { body: '', scriptsUrls: [] }
}
