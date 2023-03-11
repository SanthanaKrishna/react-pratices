import { Name } from "./Common.types";

type ProductListProps = {
	names: Name[]
}
export default function ProductList(props: ProductListProps) {
	return (
		<div>{
			props.names.map(name => {
				return (
					<h2 key={name.first}>{name.first} {name.last}</h2>
				)
			})
		}</div>
	)
}
