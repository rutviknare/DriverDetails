import React from 'react'
import { useNavigate } from 'react-router-dom';
function Header() {
    let titlename = {
        color: "",
        backgroundColor: "rgb(44, 102, 169)",
        height: "70pt",
        fontSize: "40pt",
         fontFamily: "Georgia",
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
        backgroundColor:"rgb(44, 102, 169)"
      };

  return (
    <div style={backdiv}>
       <div lassName="text-center" style={titlename}>
         Cab Management Project
    </div>
    </div>
  )
}

export default Header
