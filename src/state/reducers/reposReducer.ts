import { bindActionCreators } from "redux"
import { ActionType } from '../action-types'
import { Action } from '../actions'

interface ReposState {
  loading: boolean
  error: string | null
  data: string[]
}

const initState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: ReposState = initState, action: Action): ReposState => {
  switch(action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer