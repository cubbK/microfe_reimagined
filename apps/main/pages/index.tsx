import Header from '@micro/header-microfe'
import Main from '@micro/main-microfe'
import styles from '../helpers/index.styles.module.css'
import { reactify } from 'svelte-preprocess-react'
import AppSvelteRaw from '@micro/svelte-microfe/src/App.svelte'

const AppSvelte = reactify(AppSvelteRaw)

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
        <AppSvelte />
      </div>
    </div>
  )
}
