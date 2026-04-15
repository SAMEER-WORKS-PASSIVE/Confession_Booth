import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchData = async () => {
    let query = supabase
      .from("confessions")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter !== "All") {
      query = query.eq("category", filter);
    }

    const { data, error } = await query;

    if (!error) {
      setData(data);
    } else {
      console.log(error);
    }
  };

  // Load data + filter change
  useEffect(() => {
    fetchData();
  }, [filter]);

  // Realtime updates
  useEffect(() => {
    const channel = supabase
      .channel("realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "confessions" },
        () => fetchData()
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [filter]);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>🔥 Live Confessions</h1>

      {/* FILTER DROPDOWN */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px" }}
        >
          <option>All</option>
          <option>General</option>
          <option>Phone</option>
          <option>Mess</option>
          <option>Laptop</option>
          <option>Gym 💪</option>
        </select>
      </div>

      {/* CONFESSION CARDS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              width: "250px",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
              {item.category}
            </p>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}