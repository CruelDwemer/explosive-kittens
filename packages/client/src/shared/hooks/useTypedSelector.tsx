import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../lib'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default useTypedSelector
