import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />
  <div className="signup">
    <form>
      <label htmlFor="chk" aria-hidden="true">
        Sign Up
      </label>
      <input type="text" name="txt" placeholder="User name" required="" />
      <input type="email" name="email" placeholder="Email" required="" />
      <input type="number" name="broj" placeholder="BrojTelefona" required="" />
      <input type="password" name="pswd" placeholder="Password" required="" />
      <button>Sign Up</button>
    </form>
  </div>
  <div className="login">
    <form>
      <label htmlFor="chk" aria-hidden="true">
        Login
      </label>
      <input type="email" name="email" placeholder="Email" required="" />
      <input type="password" name="pswd" placeholder="Password" required="" />
      <button>Login</button>
    </form>
  </div>
  
  <Analytics />
</div>
  );
}

export default App;
