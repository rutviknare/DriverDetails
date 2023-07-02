import React from 'react'
import { useNavigate } from 'react-router-dom';
function Header() {
    let titlename = {
        color: "",
        backgroundColor: "blue",
        height: "70pt",
        fontSize: "40pt",
        fontfamily: "Times New Roman",
        fontWeight: "bold",
        marginLeft:"300pt"
      };
      let btn_style={
        marginLeft:"160pt",
        height:"40pt",
        width:"100pt",
        marginTop:"15pt"
      };
      let backdiv={
        display:"flex",
        // marginLeft:"300pt",
        backgroundColor:"blue"
      };

  return (
    <div style={backdiv}>
       <div className="text-center" style={titlename}>
         Cab Management Project
    </div>
    </div>
  )
}

export default Header
