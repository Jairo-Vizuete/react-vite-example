import { useState } from "react";

interface User {
  name: string;
  age: number;
  city: string;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[] | null>(null);
  const getUsers = async () => {
    await fetch("http://localhost:5173/data.json")
      .then((data) => data.json())
      .then((data) => setUsers(data));
  };

  const obj = () => {
    if (users !== null) {
      console.log(Object.assign(users));
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          getUsers(), obj();
        }}
      >
        Get users
      </button>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal && (
        <div className="test">
          {/* <iframe src="http://localhost:3000/pdf" width={400} /> */}
          <object
            data="http://localhost:3000/pdf"
            type="application/pdf"
            width="500"
            height="300"
          >
            <p>El navegador no puede mostrar el PDF incrustado.</p>
          </object>
          <button onClick={() => setShowModal(false)}>Close modal</button>
        </div>
      )}
      {users !== null &&
        users.map((user) => <div key={user.name}> {user.name}</div>)}
    </div>
  );
}

export default App;
