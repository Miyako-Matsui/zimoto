import React, { useState } from "react";
  
function ImageUploader() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} alt='user uploaded img'/>
  
        </div>
  
    );
}
  
export default ImageUploader;