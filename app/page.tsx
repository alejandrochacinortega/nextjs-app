import NewTodoForm from '../components/NewTodoForm'

// const getData = async () => {
//   await new Promise((res) => setTimeout(() => res(0), 2000))
//   return {
//     data: [0, 1, 2],
//   }
// }

const Home = async () => {
  // const data = await getData()
  return (
    <div>
      <NewTodoForm />
    </div>
  )
}

export default Home
