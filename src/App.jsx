import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [dataInvestment, setDataInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDataInvestment = dataInvestment.duration >= 1;

  function handleChangeDataInvestment(key, value) {
    setDataInvestment((prevDataInvestment) => {
      return { ...prevDataInvestment, [key]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        dataInvestment={dataInvestment}
        handleChangeDataInvestment={handleChangeDataInvestment}
      />
      {!isValidDataInvestment && (
        <p className="center">Please Input duration more than 0</p>
      )}
      {isValidDataInvestment && <Results dataInvestment={dataInvestment} />}
    </>
  );
}

export default App;
