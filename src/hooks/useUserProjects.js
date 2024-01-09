import { useEffect, useState } from "react";
import { getProjectsByUserId } from "../functions/userAPI";

export function useProjects () {

  const [userProjects, setUserProjects] = useState([]);
    
      async function getProjects(user){
        const projects = await getProjectsByUserId(user);
        return projects;
      }
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const user = JSON.parse(localStorage.getItem('user'));
            const projects = await getProjects(user);
            setUserProjects(projects)
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      },[])

return {userProjects};
}
