import React, { useEffect, useState } from 'react'

function Todo(){
  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com/todos"
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

 
 
    return (
    <div>
      <h2 className="head"> Todo List </h2>
      {data?.map((item) => 
        <ul>
          <li>{item.id}</li>
          <li>{item.title}</li>
          <li><input type="checkbox" checked={item.completed} />
            </li>
        </ul>
      )}
    </div>
  )
}

export default Todo;