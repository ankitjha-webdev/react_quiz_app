import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Forgetpass = () => {

    return(
        <>
        <section class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="login">
         <h1 className="title is-1 has-text-white">Forgot Password </h1>
        
          <form action="/home" method="get">
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="email" placeholder="example@gmail.com" autocomplete="username" required />
              </div>
            </div>
          
            <br />
            <button id="btn" class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Forgot
            </button>
          </form>
          <br/>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div >
                <p className="has-text-white" > <Link to="/login"> Click Here to Login!</Link> </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p className="has-text-white"> <Link to="/signup"> Create an Account </Link> </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
        </>
    )
}
export default Forgetpass