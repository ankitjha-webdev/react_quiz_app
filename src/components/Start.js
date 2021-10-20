import React from 'react';


const Start = ({ onQuizStart }) => {
  const ltime= new Date().toLocaleTimeString()
  const ldate= new Date().toLocaleDateString()

  return(
    <>
    
   <div className="bg-white dark:bg-gray-800">

  
    <div className="card ">
      <div className="card-content">
        <div className="content">
          <h1 className="text-white">General Quiz Questions</h1>
          <p> Current Time : {ltime} </p>
          <p> Today's Date : {ldate} </p>
          <p>All the best!</p>
          <button className="button is-white is-rounded is-outlined is-medium" id="btn" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Start;