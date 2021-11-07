import React from "react";
import UserService from "../services/user.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReactHtmlParser from 'react-html-parser';

const Open = () => {
  const [resume, setResume] = useState([])
  const [loadingResume, setLoadingResume]= useState(false)

  let { name } = useParams();

  useEffect(() => {
    UserService.getOpenResume(name).then(
      (response) => {
        setResume(response.data)
        setLoadingResume(true)
      }); 
  }, [name]);

  return (
    <div className="container"> 
      {loadingResume ? (  <div>{ ReactHtmlParser(resume[0].resume) }</div>
        ):(<p>loadingUser</p>)}
    </div>
  );
};

export default Open;
