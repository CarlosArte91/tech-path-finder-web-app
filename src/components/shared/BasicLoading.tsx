import PuffLoader  from 'react-spinners/PuffLoader'

export default function BasicLoading() {
  return (
    <div className='h-[700px] flex justify-center items-center'>
      <PuffLoader 
        color={'#1e293b'}
        loading={true}
        size={160}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}
