import React from 'react'

function Header() {
    let titlename = {
        color: "",
        backgroundColor: "blue",
        height: "50pt",
        fontSize: "30pt",
        fontfamily: "Droid Sans",
        fontWeight: "bold",
      };
  return (
       <div className="text-center" style={titlename}>
      Cab Management Project
    </div>
    
  )
}

export default Header
