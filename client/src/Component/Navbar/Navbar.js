import React from "react";
import './Navbar.css';
// import logo from '../../Imges/nav logo';
import logo from '../../Imges/simple.jpg';
import "bootstrap/dist/css/bootstrap.css"


export function Nav() {
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#"><img src={logo}  className="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <a class="nav-link" href="/About">About</a>

        <li class="nav-item">
          <a class="nav-link" href="/Requestpage">Request Blood</a>
        </li>
        <a class="nav-link" href="/Getrequest">Get Request</a>

        <li class="nav-item">
          {/* <a class="nav-link" href="/Donar">Blood Donation Camps</a> */}
        </li>
        <a class="nav-link" href="/Bloodable">Blood  Avaliable</a>
        {/* <a class="nav-link" href="/Donar">Donar Camp</a> */}


        <li class="nav-item dropdown">

        <a class="nav-link" href="/Contact">Contact Us</a>

          {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Donar list
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}