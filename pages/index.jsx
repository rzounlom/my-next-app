/** @jsxRuntime classic */
/** @jsx jsx */

import Link from 'next/link'
import { jsx } from 'theme-ui'

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>

    </div>
    <Link href='/notes'>Notes</Link>
  </div> 
)

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}