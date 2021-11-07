import api from "./api";


const getResume=()=>{
  return api.get("resume/");
}
const saveResume=(resume, id)=>{
  return api.put(`resume/${id}`, 
  {resume});
}
const getOpenResume=(name)=>{
  return api.get(`open/${name}`);
}

const UserService = {
  getResume,
  saveResume,
  getOpenResume
};

export default UserService;
