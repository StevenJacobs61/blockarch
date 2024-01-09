import React, { useEffect, useState } from 'react'
import '../../styles/result.scss'
import ResultComp from '../../components/apps/result/resultComp'
import { ReactComponent as Bin } from '../../svg/bin.svg'
import { deleteProject } from '../../functions/userAPI'
import { useNavigate } from 'react-router-dom'

const Result = () => {

  const [project, setProject] = useState(JSON.parse(localStorage.getItem('project')));
  const [results, setResults] = useState(JSON.parse(localStorage.getItem('results')));
  const navigate = useNavigate();
  /* eslint-disable no-restricted-globals */

  async function handleDelete(){
    if(confirm("Are you sure you wish to delete this project?")){
      try {
        const res =  await deleteProject(project, results);
        localStorage.removeItem('project')
        localStorage.removeItem('results')
      window.location.reload();     
        window.location.href = '/apps';
        console.log(res);
      } catch (error) {
        console.error(error)
      }
    }
  }
  /* eslint-enable no-restricted-globals */

  useEffect(()=>{
    if(!localStorage.getItem('user')){
      navigate('/apps/questions/login')
    }
  },[])

  return (
    <div className='result_container'>
      <div className="result_result">
      <h1 className='apps_hdr'>Result</h1>
      <ResultComp project={project}/>
      </div>
      <div className='result_manage'>
        <div className="result_binContainer">
          <Bin width={'100%'} height={'100%'} onClick={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default Result