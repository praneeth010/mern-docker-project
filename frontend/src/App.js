import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>MERN Docker App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
