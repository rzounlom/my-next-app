/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { jsx } from 'theme-ui'

export default ({notes}) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}} key={note.id}>
            <Link sx={{textDecoration: 'none', cursor: 'pointer'}} key={note.id} href="/notes/[note.id]" as={`/notes/${note.id}`}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}