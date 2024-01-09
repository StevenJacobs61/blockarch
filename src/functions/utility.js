import { getById } from "./userAPI";

export const isNull = (obj) =>{
    console.log(Object.values(obj).some((val) => val === null || val === ""));
    return Object.values(obj).some((val) => val === null);
}
export const clearLocalData = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('qIndex');
    localStorage.removeItem('block');
    localStorage.removeItem('project');
    localStorage.removeItem('results');
    return
}
export const resetLocalProject = () => {
    localStorage.removeItem('project');
    localStorage.removeItem('results')
}
export const naviagteToResult = async (project) => {
    let success = true;
    try {
        localStorage.setItem('project', JSON.stringify(project));
        const results = await getById(project.id, '/project-blockchain-result');
        localStorage.setItem('results', JSON.stringify(results));    
        window.location.href = '/apps/result'; 
      } catch (error) {
        console.error(error);
        success = false;
      }
      return success;
}

export const handleAddProject = () => {
    localStorage.removeItem('project');
    localStorage.setItem('block', JSON.stringify(1))
    localStorage.setItem('qIndex', JSON.stringify(0))
    if(window.location.pathname === '/apps/questions'){
      window.location.reload();
    }
    window.location.href =  '/apps/questions';
  }