import Header from '@micro/header-microfe'
import Main from '@micro/main-microfe'
import styles from '../helpers/index.styles.module.css'
import MicroLoader from 'helpers/MicroLoader'

// @ts-ignore
import rawScriptSvelte from 'raw-loader!@micro/svelte-microfe/dist/index.js'
// @ts-ignore
import rawScriptVue from 'raw-loader!@micro/vue-microfe/dist/index.js'

export default function Index() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
      <div className={styles.notReact}>
        <MicroLoader id="@micro/svelte-microfe" jsRaw={rawScriptSvelte} />
      </div>
      <div className={styles.notReact}>
        <MicroLoader id="microfe-vue-microfe" jsRaw={rawScriptVue} />
      </div>
    </div>
  )
}
