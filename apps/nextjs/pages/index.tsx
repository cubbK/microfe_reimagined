import Header from '@micro/header-microfe'
import Main from '@micro/main-microfe'
import styles from '../helpers/index.styles.module.css'
import MicroLoader from 'helpers/MicroLoader'
import React from 'react'
// In principle it is possible to make a custom webpack plugin for all this
// @ts-ignore also can be imported from a different repo
import rawScriptSvelte from 'raw-loader!@micro/svelte-microfe/dist/index.js'
import '@micro/svelte-microfe/dist/index.css'
// @ts-ignore
import rawScriptVue from 'raw-loader!@micro/vue-microfe/dist/index.js'
import '@micro/vue-microfe/dist/index.css'

export default function Index() {
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
    </div>
  )
}