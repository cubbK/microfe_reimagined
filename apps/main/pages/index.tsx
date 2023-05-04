import Header from '@micro/header-microfe'
import Main from '@micro/main-microfe'
import * as styles from './index.styles'

export default function Index() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
    </div>
  )
}
