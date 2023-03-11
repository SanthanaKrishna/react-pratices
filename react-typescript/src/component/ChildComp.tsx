type ChildCompProps= {
    children: React.ReactNode
}
function ChildComp(props: ChildCompProps) {
  return <div>{props.children}</div>;
}

export default ChildComp