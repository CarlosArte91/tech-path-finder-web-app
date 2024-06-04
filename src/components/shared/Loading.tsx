import PuffLoader  from 'react-spinners/PuffLoader'

interface LoadingProps {
  size: number
  loading: boolean
  round: string
}

export default function Loading({ size, loading, round }: LoadingProps) {
  return (
    <div
      className={
        `bg-white bg-opacity-70 flex justify-center items-center absolute w-full h-full rounded-${round}`
      }
    >
      <PuffLoader 
        color={'#1e293b'}
        loading={loading}
        size={size}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}
