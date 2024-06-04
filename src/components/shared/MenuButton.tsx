interface MenuButtonProps {
  text: string
  onClick: () => void
}

export default function MenuButton({ text, onClick }: MenuButtonProps) {
  return (
    <button
      className='text-white text-left hover:bg-[#334155] w-full pl-[20px] py-[8px]'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
