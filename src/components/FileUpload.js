import React, { useState } from 'react'
import axios from 'axios';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [errorMsg, setErrorMsg] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFileChange = (e) => {
        if(e.target.files.length > 0){
          setSelectedFile(e.target.files[0]);
        }
      };

      const validateSelectedFile = () => {
        // const MIN_FILE_SIZE = 1024 // 1MB
        const MAX_FILE_SIZE = 1020 // 5MB

        if(!selectedFile){
            setErrorMsg("Please choose a file");
            setIsSuccess(false);
            return;
        } else {
            var fsize = selectedFile.size/1024;
            const imageMimeType = /image\/(png|jpg|jpeg)/i;

            if(fsize > MAX_FILE_SIZE) {
                setErrorMsg("Maximum file size exceed, This file size is: " + fsize + "KB");
                return;
            } 
           else if (!selectedFile.type.match(imageMimeType)) {
                setErrorMsg("File type is not valid");
                return;
              }
            else {
                console.log(selectedFile);
                setErrorMsg("");
                console.log("uploded file");
                const url = 'http://localhost:5001/uploadCsvFile';
                const formData = new FormData();
                formData.append('file', selectedFile);
                formData.append('fileName', selectedFile.name);
                const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
                };
                axios.post(url, formData, config).then((response) => {
                console.log(response.data);
                });
            }
            console.log(selectedFile.size/1024);
        }
    }
  return (
    <div>            
            <h3>
              File Upload
            </h3>
            <div>
                {/* <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}> */}
                <input type="file" onChange={handleFileChange}/>
                
            
                <p className="error-message">{errorMsg}</p>
                <button onClick={validateSelectedFile}>
                  Upload!
                </button>
            </div>
          {/* {this.fileData()} */}
        </div>
  )
}

export default FileUpload