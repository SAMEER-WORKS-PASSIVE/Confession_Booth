import { useState } from "react";
import Form from "./Form";
import Dashboard from "./Dashboard";
import { supabase } from "./supabase";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const submitData = async (category, message) => {
    if (!message.trim()) return;

    const { error } = await supabase
      .from("confessions")
      .insert([{ category, message }]);

    if (!error) {
      setShowDashboard(true);
    }
  };

  return showDashboard ? (
    <Dashboard />
  ) : (
    <Form submitData={submitData} />
  );
}

export default App;