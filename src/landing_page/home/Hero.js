import React from 'react'

function Hero() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>CDN Test</h2>

      {/* Font Awesome Test */}
      <p>
        Home Icon: <i className="fa-solid fa-house"></i>
      </p>

      <p>
        GitHub Icon: <i className="fa-brands fa-github"></i>
      </p>

      {/* Bootstrap Test */}
      <button className="btn btn-primary">
        Bootstrap Working
      </button>
    </div>
  );
}

export default Hero;
