type Props = {
    children: React.ReactNode;
    bgButton: string;
}

const ButtonRounded = ({ children, bgButton }: Props) => {
  return (
    <div className={`px-5 py-2 rounded-full ${bgButton} fill-regal-blue`}>
        {children}
    </div>
  )
}

export default ButtonRounded
