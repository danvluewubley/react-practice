import Hello from "./components/Hello";

function App() {
  const person = {
    name: 'Daniel',
    message: 'Hello',
    seatNumbers: [1, 4, 7]
  }
  return (
    <>
      <Hello person={person} />
    </>
  );
}

export default App;
