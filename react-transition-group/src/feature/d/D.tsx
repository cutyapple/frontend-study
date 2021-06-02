import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";

function D() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div style={{ paddingTop: "2rem" }}>
      {showButton && (
        <button onClick={() => setShowMessage(true)}>Show Message</button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <button onClick={() => setShowMessage(false)}>Close</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default D;
