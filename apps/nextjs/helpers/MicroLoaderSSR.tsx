import dynamic from 'next/dynamic'

const MicroLoaderSSR = dynamic(() => import('./__MicroLoaderSSR'), {
  ssr: false,
})

export default MicroLoaderSSR
