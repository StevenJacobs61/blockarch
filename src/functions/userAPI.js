import axios from "axios";

// API calls to interact with the Users table in DB

export const getUserByEmail = async (email) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/user/email?email=${email}`
  );
  return response.data;
};
export const getById = async (id, path) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`
  );
  return response.data;
};

export const add = async (newData, path) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}${path}`,
    newData
  );
  return response;
};

export const updateById = async (newUserDetails, path, id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`,
    newUserDetails
  );
  return response;
};

export const deleteById = async (id, path) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`
  );
  return response;
};

export const getProjectsByUserId = async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/user-project/projects`,
    user
  );
  return response.data;
};
export const deleteProject = async (project, results) => {
  let success = true;
  let projectId = project.id;
  let industryId = project.industryUsage?.id;
  let networkId = project.networkParticipants?.id;
  let purposeId = project.purpose?.id;
  let languagesId = project.developmentLanguages?.id;
  try {
    // Change FK entires to null in project
    const projectRes = await updateById(
      {
        ...project,
        industryUsage: null,
        networkParticipants: null,
        purpose: null,
        developmentLanguages: null,
        user: null,
      },
      "/user-project",
      projectId
    );
    //   Change FK entries in industry, network, langhauges and prupose to null
    //   and delete the entries
    const industryRes = await deleteById(industryId, "/user-project-industry");
    const networkRes = await deleteById(
      industryId,
      "/user-project-network-participants"
    );
    const langaugesRes = await deleteById(
      industryId,
      "/user-project-languages"
    );
    const pruposeRes = await deleteById(industryId, "/user-project-purpose");

    // Update FK userProject in each result to null and delete record

    results.map(async (result) => {
      try {
        const resultRes = await updateById(
          { ...result, user_project_id: null },
          "/project-blockchain-result",
          result.id
        );
        const deleteResultRes = await deleteById(
          result.id,
          "/project-blockchain-result"
        );
      } catch (error) {
        console.error(error);
        success = false;
      }
    });

    // Delete the project entry
    const deleteProjectRes = await deleteById(projectId, "/user-project");
  } catch (error) {
    console.error(error);
    success = false;
  }
  return success;
};
