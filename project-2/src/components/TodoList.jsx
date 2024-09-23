import React from 'react'

export default function TodoList() {

  let todos=['efg' ,
            'abc' ,
            'xyz'
  ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) =>{
          return(
            <TodoCard key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
             
      )
    })}
    </ul>
  )
}
