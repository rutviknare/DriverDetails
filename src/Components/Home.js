import React from 'react'
import add from "../images/add.png";
import update from "../images/update.png";
import deleteimg from "../images/delete.png";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();

 

  let cardstyle1 = {
    width: "18rem",
    marginLeft: "100pt",
    height: "270pt",
    marginTop: "10%",
  };
  let cardstyle2 = {
    width: "18rem",
    marginTop: "10%",
    height: "270pt",
    marginLeft: "130pt",
  };
  let cardstyle3 = {
    width: "18rem",
    marginLeft: "140pt",
    height: "270pt",
    marginTop: "10%",
  };

  let imageicon = {
    width: "210pt",
    height: "120pt",
  };
  let backimagestyle={
      /* background-image: url(./images/cabcar.jpg); */
      backgroundColor: "rgb(12, 204, 16)",
      display: "flex",
      height: "460pt"
  
  };
  return (
    <>
   
    <div className="back-image" style={backimagestyle}>
      <div className="card " style={cardstyle1}>
        <img
          className="card-img-top"
          src={add}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Add Details</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/add')}>
            ADD
          </button>
        </div>
        {/* </div> */}
      </div>

      <div className="card" style={cardstyle2}>
        <img
          className="card-img-top"
          src={update}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Update Details</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/update')}>
            {" "}
            UPDATE
          </button>
        </div>
        {/* </div> */}
      </div>

      <div className="card" style={cardstyle3}>
        <img
          className="card-img-top"
          src={deleteimg}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Delete Details</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/delete')}>
            {" "}
            DELETE
          </button>
        </div>
      </div>
    </div>

    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-dark" href="">
          AFour Hackathon
        </a>
      </div>
    </footer>
  </>
  )
}

export default Home
