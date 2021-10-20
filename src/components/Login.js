import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


export default function Login(){
    return(
            <>
       <section className="hero is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="login">
         <h1 className="title is-1 has-text-white">Login Here!   </h1>
         <h5 className="title is-5 has-text-white">  To Join the Quiz</h5>
          <form action="/home" method="get">
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="email" placeholder="example@gmail.com" autoComplete="username" required />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="password" placeholder="**********" autoComplete="current-password" required />
              </div>
            </div>
            <br />
            <button id="btn" name="submit" className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Login
            </button>
          </form>
          <br/>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div >
                <p className="has-text-white" > <Link to="/passforget"> Forgot Password?</Link> </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="has-text-white"> <Link to="/signup"> Create an Account </Link> </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
        </>
    );
}