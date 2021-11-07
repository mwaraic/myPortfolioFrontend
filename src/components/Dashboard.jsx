import React from "react";
import UserService from "../services/user.service";
import { useState, useEffect} from "react";
import { Editor } from "@tinymce/tinymce-react";
import AuthService from "../services/auth.service";
import { Redirect } from "react-router";

const Dashboard = () => {
  const [docu, setDocu]= useState('')
  const [resume, setResume] = useState([])
  const [loadingResume, setLoadingResume]= useState(false)

  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    UserService.getResume().then(
      (response) => {
        setResume(response.data)
        setLoadingResume(true)
      }); 
  }, []);
  
  const handleEditorChange = (e) =>{
    console.log(e.target.getContent())
    setDocu(e.target.getContent())
  }
  const saveDocu = () => {
    UserService.saveResume(docu, resume[0].id); 
  }
    if(!currentUser){
      return(
      <Redirect to="/login"/>
      )}
  return (
    <div className="container">
       <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange="" />
      {loadingResume ? (  
        
      <Editor
      apiKey="6xwv4a6paamjsewlvtv93wzd1f4ghfxgfzd80g5qwyhrf7z5"
      initialValue={resume[0].resume}
      init={{
        forced_root_block : false,
        height: 600,
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl| link image',
        file_picker_types: "file image media",
        file_browser_callback_types: 'image',
              file_picker_callback: function (callback, value, meta) {
                if (meta.filetype === 'image') {
                    var input = document.getElementById('my-file');
                    input.click();
                    input.onchange = function () {
                        var file = input.files[0];
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            console.log('name',e.target.result);
                            callback(e.target.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                }
            },
              paste_data_images: true,
      }}
      onChange={handleEditorChange}
      
      />):(<p>loadingUser</p>)}
      
      <button onClick={saveDocu}>Save</button>
       
    </div>
  );
};

export default Dashboard;
