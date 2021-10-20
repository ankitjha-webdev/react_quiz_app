import React from 'react';

const Modal = ({ onClose, results, data }) => {
  return(
    <div className="modal is-active">
      <div id="model">
      </div>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card" id="model">
        <header className="modal-card-head" id="model">
          <p className="modal-card-title" id="model">Your answers</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content" id="model">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong id="cl">{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'pgreen p-2 ch' : 'ans-dn p-2'}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="plink p-2">Correct answer: {data[i].answer}</p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;