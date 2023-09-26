import { Outlet } from 'react-router-dom'
import QuestionsBar from './questionsBar'

const QuestionsLayout = () => {
  return (
    <div>
      <QuestionsBar/>
      <div className="layout_container">
        <Outlet/>
      </div>
    </div>
  )
}

export default QuestionsLayout