/** @jsxRuntime classic */
/** @jsx jsx */
//lets the compiler to know to use the jsx imported from theme-ui

import Link from 'next/link'
import { jsx } from 'theme-ui'

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}} href="/">
        Note App
      </Link>

      <Link sx={{color: 'text', fontSize: 3, cursor: 'pointer'}} href="/notes">
        notes
      </Link>
    </nav>
  </header>
)

export default Nav