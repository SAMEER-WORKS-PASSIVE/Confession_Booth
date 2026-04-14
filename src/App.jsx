import Form from "./Form";

function App() {
  const submitData = (category, message) => {
    console.log(category, message);
  };

  return <Form submitData={submitData} />;
}

export default App;