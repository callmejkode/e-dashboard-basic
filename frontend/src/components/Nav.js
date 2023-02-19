import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
<a class="close-navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
    </a>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link to ='/' class="nav-link active" >Product</Link>
       <Link to ='/add' class="nav-link">Add Product</Link>
       <Link to ='/update' class="nav-link">Update Product</Link>
       <Link to ='/logout' class="nav-link">logout</Link>
       <Link to ='/profile' class="nav-link"> Profile</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
