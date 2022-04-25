import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepos } = useActions()
  const { data, error, loading } = useTypedSelector((state) => state.repos)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchRepos(term)
  }

  return <div>
    <form onSubmit={onSubmit} action="">
      <input value={term} onChange={e => setTerm(e.target.value)} type="text" />
      <button>search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
  </div>
}

export default RepoList