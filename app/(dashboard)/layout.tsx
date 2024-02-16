interface ILayout {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: ILayout) => {
  return (
    <div>
      <h1>Layout Dashboard</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
