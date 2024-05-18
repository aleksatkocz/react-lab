import {useState} from "react";

function App() {

  const [email, setEmail] = useState('example_email@example.com');
  let info;

    if (email.length<5) {
        info = <div>Twój email jest za krótki</div>;
    } else if (email.length < 40) {
        info = <div>Twój adres e-mail jest w sam raz</div>;
    } else {
        info = <div>Twój adres e-mail jest stanowczo za długi</div>;
    }
    function handleChange(event) {
        setEmail(event.target.value);
    }

  return (

      <div>
        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email}</h2>
        {info}
        <input type="text" value={email} onChange={handleChange}/>
      </div>

  );

}


export default App;
