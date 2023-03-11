
//here children type will be string and React.Node bcoz of React.ComponentProps 
// type ButtonProps = {
//   variant: 'primary' | 'secondary'
//   children: string
// } & React.ComponentProps<'button'>

//to restrit children type  we need to Omit 
type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>


function CustomButton({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton