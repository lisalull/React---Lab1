import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);
  const total: number = cVotes + vVotes + sVotes;

  const cPercent: string = `${((cVotes / total) * 100).toFixed(1)}%`;
  const vPercent: string = `${((vVotes / total) * 100).toFixed(1)}%`;
  const sPercent: string = `${((sVotes / total) * 100).toFixed(1)}%`;

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={() => setCVotes((prev) => prev + 1)}>Chocolate</button>
        <button onClick={() => setVVotes((prev) => prev + 1)}>Vanilla</button>
        <button onClick={() => setSVotes((prev) => prev + 1)}>Stawberry</button>
      </div>
      {total ? (
        <>
          <p>
            Chocolate: {cVotes} ({cPercent})
          </p>
          <div
            className="bar"
            style={{ width: cPercent, backgroundColor: "#4f2c2c" }}
          ></div>
          <p>
            Vanilla: {vVotes} ({vPercent})
          </p>
          <div
            className="bar"
            style={{ width: vPercent, backgroundColor: "#cbc0ac" }}
          ></div>
          <p>
            Strawberry: {sVotes} ({sPercent})
          </p>
          <div
            className="bar"
            style={{ width: sPercent, backgroundColor: "#de8c91" }}
          ></div>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default Votes;
