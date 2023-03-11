//<T> T stands for type
type ListProps<T> = {
  // items: string[] | number[]
  // onClick: (value: string | number) => void
  items: T[]
  onClick: (value: T) => void
};

// to apply restriction  the apply <T extends string | number> and for object <T extends {id: number}> 
function List<T extends {}>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of Item</h2>
      {
        items.map((item, index) => {
          return (
            <div key={item} onClick={() => onClick(item)}>
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default List