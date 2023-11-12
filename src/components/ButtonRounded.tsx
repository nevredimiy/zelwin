type Props = {
    children: React.ReactNode;
    rootClass: string;
}

const ButtonRounded = ({ children, rootClass }: Props) => {
  return (
    <button type="button" className={`rounded-full ${rootClass}`}>
        {children}
    </button>
  )
}

export default ButtonRounded
