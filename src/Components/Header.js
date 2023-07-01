import React from 'react'

function Header() {
    let titlename = {
        color: "",
        backgroundColor: "blue",
        height: "70pt",
        fontSize: "40pt",
        fontfamily: "Times New Roman",
        fontWeight: "bold",
      };
  return (
       <div className="text-center" style={titlename}>
      Cab Management Project
    </div>
    
  )
}

export default Header
