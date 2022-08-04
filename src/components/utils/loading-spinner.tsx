import { FC } from 'react'
import { PuffLoader } from 'react-spinners'

export const LoadingSpinner: FC = () => {
  return <PuffLoader cssOverride={{ margin: '50px auto' }} size={100} />
}
