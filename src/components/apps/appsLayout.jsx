import AppsBar from '../apps/appsBar'

const AppsLayout = ({children}) => {
  return (
    <div>
      <AppsBar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default AppsLayout