import { useState } from "react";

export default function Form({ submitData }) {
  const [category, setCategory] = useState("General");
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Confession Booth 💭</h2>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>Love ❤️</option>
        <option>College 🎓</option>
        <option>Funny 😂</option>
      </select>

      <br /><br />

      <textarea
        placeholder="Write your confession..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={() => submitData(category, message)}>
        Submit 🚀
      </button>
    </div>
  );
}