import { getById } from "./userAPI";

export const isNull = (obj) => {
  return Object.values(obj).some(
    (val) =>
      val === null ||
      val === undefined ||
      `${val}` === "NaN" ||
      val === "" ||
      val.toString().trim() === ""
  );
};
export const clearLocalData = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("qIndex");
  localStorage.removeItem("block");
  localStorage.removeItem("project");
  localStorage.removeItem("results");
  return;
};
export const resetLocalProject = () => {
  localStorage.removeItem("project");
  localStorage.removeItem("results");
};
export const naviagteToResult = async (project) => {
  if (await setLocalResults(project)) {
    window.location.href = "/apps/result";
  }
};
export const setLocalResults = async (project) => {
  let success = true;
  try {
    localStorage.setItem("project", JSON.stringify(project));
    const results = await getById(project.id, "/project-blockchain-result");
    localStorage.setItem("results", JSON.stringify(results));
  } catch (error) {
    console.error(error);
    success = false;
  }
  return success;
};

export const handleAddProject = () => {
  localStorage.removeItem("project");
  localStorage.setItem("block", JSON.stringify(1));
  localStorage.setItem("qIndex", JSON.stringify(0));
  if (window.location.pathname === "/apps/questions") {
    window.location.reload();
  }
  window.location.href = "/apps/questions";
};

export const calculateAndSortResults = (results) => {
  results.forEach((result) => {
    let total =
      result.block_1_score +
      result.block_2_score +
      result.block_3_score +
      result.block_4_score +
      result.block_5_score +
      result.block_6_score +
      result.block_7_score;
    result.total = total;
  });
  return results.sort((a, b) => b.total - a.total);
};
