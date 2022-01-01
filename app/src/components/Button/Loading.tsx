import { LoadingItem, LoadingWrapper } from './styled'

export const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </LoadingWrapper>
  )
}