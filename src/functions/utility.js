export const isNull = (obj) =>{
    console.log(Object.values(obj).some((val) => val === null));
    return Object.values(obj).some((val) => val === null);
}
export const clearLocalData = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('qIndex');
    localStorage.removeItem('block');
    localStorage.removeItem('project');
    return
}