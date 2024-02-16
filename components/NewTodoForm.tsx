'use client'
import React, { useState } from 'react'

const NewTodoForm = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <h1>Todo form</h1>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

export default NewTodoForm
