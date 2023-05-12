import Header from '@micro/header-microfe'
import Main from '@micro/main-microfe'
import styles from '../helpers/index.styles.module.css'
import MicroLoader from 'helpers/MicroLoader'
import React from 'react'
// In principle it is possible to make a custom webpack plugin for all this
// @ts-ignore also can be imported from a different repo
import rawScriptSvelte from 'raw-loader!@micro/svelte-microfe/dist/index.js'
import '@micro/svelte-microfe/dist/index.css'
// Also in principle it would be better to use https://github.com/devilwjp/veaury and not load built bundles. Unfortunately it veaury breaks with ssr.
// Also as an alternative a webpack plugin can be used that "builds" on the fly so we don't need to buld the bundles beforehand
// @ts-ignore
import rawScriptVue from 'raw-loader!@micro/vue-microfe/dist/index.js'
import '@micro/vue-microfe/dist/index.css'
import { fetchSSRRespose } from 'helpers/__MicroLoaderSSR'
import MicroLoaderSSR from 'helpers/MicroLoaderSSR'

export default function Index(props: any) {
  const [count, setCount] = React.useState(0)
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Main />
        <button onClick={() => setCount(count + 1)}>
          {' '}
          count is {count} from react
        </button>
      </div>
      <div className={styles.svelte}>
        <MicroLoader id="@micro/svelte-microfe" jsRaw={rawScriptSvelte} />
      </div>
      <div className={styles.vue}>
        <MicroLoader id="microfe-vue-microfe" jsRaw={rawScriptVue} />
      </div>
      <div className={styles.vue}>
        {/** Broken. It doesn't hydrate */}
        <MicroLoaderSSR
          id="nuxt-about"
          body={props.aboutPage.body}
          scriptsUrls={props.aboutPage.scriptsUrls}
        />
      </div>
    </div>
  )
}

// broken, used for nuxt inside next ssr
export async function getServerSideProps(context: any) {
  return {
    props: {
      aboutPage: await fetchSSRRespose(
        'nuxt-about',
        'http://localhost:3005/nuxt'
      ),
    }, // will be passed to the page component as props
  }
}
