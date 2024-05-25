import { useState } from "react";
import './App.css';

export default function App() {
  const [person, setPerson] = useState({
    name: 'Thitom Angelo Buligan',
    sex: 'Male',
    age: '21',
    address: 'Pooc Oriental, Tubigon, Bohol'
  });

  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [sexInput, setSexInput] = useState('');

  function handeNameChange(event) {
    setNameInput(event.target.value);
  }

  function handeAddressChange(event) {
    setAddressInput(event.target.value);
  }

  function handeSexChange(event) {
    setSexInput(event.target.value);
  }

  function handeAgeChange(event) {
    setAgeInput(event.target.value);
  }

  function handleSubmit() {
    setPerson(prevPerson => {
      return {
        ...prevPerson,
        name: nameInput || prevPerson.name,
        address: addressInput || prevPerson.address,
        age: ageInput || prevPerson.age,
        sex: sexInput || prevPerson.sex
      };
    });
    
    setNameInput('');
    setAddressInput('');
    setAgeInput('');
    setSexInput('');
  }

  return (
    <div>
      <h1>Personally-Identifiable Information</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{person.address}</td>
          </tr>
          <tr>
            <th>Sex</th>
            <td>{person.sex}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{person.age}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={nameInput} onChange={handeNameChange} /><br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={addressInput} onChange={handeAddressChange} /><br />
          <label htmlFor="sex">Sex</label>
          <input type="text" id="sex" value={sexInput} onChange={handeSexChange} />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" value={ageInput} onChange={handeAgeChange} />
        </div>
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}