import "./App.css";

function App() {
  return (
    <div className="container">

      <nav>
        <h2>⚖ AI FIR</h2>

        <div>
          <button>Home</button>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>


      <section className="hero">

        <div className="text">

          <h1>
            AI Powered <span>FIR Assistant</span>
          </h1>

          <p>
            Report crimes easily using Artificial Intelligence.
            Create FIR reports quickly and securely.
          </p>

          <button className="start">
            Start FIR
          </button>

        </div>


        <div className="card">

          <h2>🚔 AI FIR System</h2>

          <p>
            ✔ Voice Complaint
            <br/>
            ✔ AI Complaint Analysis
            <br/>
            ✔ Auto FIR Generation
            <br/>
            ✔ Police Verification
          </p>

        </div>

      </section>


      <footer>
        © 2026 AI FIR System
      </footer>

    </div>
  );
}

export default App;