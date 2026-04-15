import { useState } from "react";

export default function Form({ submitData }) {
  const [category, setCategory] = useState("General");
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>💭 Confession Booth</h1>

      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "25px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        >
          <option>General</option>
          <option>Phone</option>
          <option>Mess</option>
          <option>Laptop</option>
          <option>Gym 💪</option>
        </select>

        <textarea
          value={message}
          placeholder="Write your confession..."
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            height: "80px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            marginBottom: "15px",
            resize: "none",
          }}
        />

       <button
  onClick={() => submitData(category, message)}
  onMouseOver={(e) => (e.target.style.background = "#5a4bdc")}
  onMouseOut={(e) => (e.target.style.background = "#6c5ce7")}
  style={{
    width: "100%",
    padding: "10px",
    background: "#6c5ce7",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  Submit 🚀
</button>
      </div>
    </div>
  );
}