import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
export default function Signup(){
    return(
            <>
       <section class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="login">
         <h1 className="title is-1 has-text-white">Login Here! </h1>
         <h5 className="title is-5 has-text-white">  To Join the Quiz</h5>
          <form action="/login" method="get">
            <div class="field">
            <div class="control">
                <input class="input is-medium is-rounded" type="text" placeholder="Your First Name" autocomplete="First Name" required />
              </div>
              </div>
              <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="text" placeholder="Your Last Name" autocomplete="Last Name" required />
              </div>
              </div>
              <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="email" placeholder="example@gmail.com" autocomplete="username" required />
              </div>
              </div>
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
              </div>
            </div>
       
            <button id="btn" class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Signup
            </button>
          </form>
          <br/>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div >
                <p className="has-text-white"> <Link to="/passforget">  Forgot Password?</Link> </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p className="has-text-white"> <Link to="/login">Click here to Login!</Link> </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>


        </>
    );
}