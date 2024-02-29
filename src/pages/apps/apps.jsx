import React, { useEffect, useState } from "react";
import "../../styles/apps.scss";
import Match from "../../components/apps/match";
import { useProjects } from "../../hooks/useUserProjects";
import { useNavigate } from "react-router-dom";
import { deleteById, deleteProject, getById } from "../../functions/userAPI";
import { clearLocalData, handleAddProject } from "../../functions/utility";
import { logOut } from "../../functions/logIn";

const Apps = () => {
  const { userProjects } = useProjects();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/apps/questions/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  /* eslint-disable no-restricted-globals */
  async function handleDelete() {
    if (confirm("Are you sure you wish to delete your account?")) {
      setLoading(true);
      try {
        for (const project of userProjects) {
          const resultsRes = await getById(
            project.id,
            "/project-blockchain-result"
          );
          await deleteProject(project, resultsRes);
        }
        await deleteById(user.id, "/user");
        await clearLocalData();
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  const handleLogout = () => {
    if (confirm("Are you sure you wish to logout?")) {
      clearLocalData();
      logOut();
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* eslint-enable no-restricted-globals */
  return (
    <div className="apps_container">
      <div className="apps_sectionContainer">
        <h2 className="apps_hdr">Projects</h2>
        {!userProjects.length ? (
          <>
            <h3 className="apps_text">No current projects...</h3>
            <button className="apps_create" onClick={handleAddProject}>
              Create project
            </button>
          </>
        ) : (
          <div className="apps_matchesContainer">
            {userProjects?.map((project, i) => (
              <div className="apps_matchContainer" key={i}>
                <Match project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="apps_sectionsContainer">
        <h2 className="apps_hdr">Account</h2>
        {!loading ? (
          <h3 className="apps_delete" onClick={handleLogout}>
            {/* Delete account */}
            Logout
          </h3>
        ) : (
          <div className="spinner" />
        )}
      </div>
    </div>
  );
};

export default Apps;
