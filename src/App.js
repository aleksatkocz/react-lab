import {useState} from "react";
import "milligram";

function App() {

  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleChange(event) {
      setEmail(event.target.value);
  }
  function logout() {
      setIsAuthenticated(false);
      setEmail('');
  }

  let content;
  if (isAuthenticated) {
      content = <div>
          <h2>Witaj {email}</h2>
          <button onClick={logout}>
              Wyloguj
          </button>
      </div>
  } else {
      content = <div>
          <h2> {email}</h2>
          <input type="text" value={email} onChange={handleChange}/>
          <button onClick={() => setIsAuthenticated(true)}>
              Zaloguj
          </button>
      </div>
  }

  return (
      <div>
          <h1>System do zapisów na zajęcia</h1>
          {content}
      </div>
  );
}

export default App;
