import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput({
  dataInvestment,
  handleChangeDataInvestment,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={dataInvestment["initialInvestment"]}
            type="number"
            required
            onChange={(event) =>
              handleChangeDataInvestment(
                "initialInvestment",
                event.target.value
              )
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            value={dataInvestment["annualInvestment"]}
            type="number"
            required
            onChange={(event) =>
              handleChangeDataInvestment("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={dataInvestment["expectedReturn"]}
            type="number"
            required
            onChange={(event) =>
              handleChangeDataInvestment("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={dataInvestment["duration"]}
            type="number"
            required
            onChange={(event) =>
              handleChangeDataInvestment("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
