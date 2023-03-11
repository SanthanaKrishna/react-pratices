//extract props type from one component to another
import Greet from "../Greet"

const ExtractPropsType = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}

export default ExtractPropsType