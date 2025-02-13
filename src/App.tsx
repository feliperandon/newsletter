import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1 className="text-red-600">Increva-se</h1>
      <p>Assine nosso Newsletter e mantenha-se informado</p>
      <div>
        <Form />
      </div>
      <p>
        Ao se inscrever, você passará a receber os nossos emails com as melhores
        dicas, novidades e ofertas
      </p>
    </div>
  );
}

export default App;
