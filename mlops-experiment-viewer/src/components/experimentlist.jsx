import React from "react";

function ExperimentList({ experiments, selected, onChange }) {
  const toggle = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter((e) => e !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div>
      <h2>Select Experiments</h2>
      {experiments.map((id) => (
        <label key={id} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selected.includes(id)}
            onChange={() => toggle(id)}
          />
          {id}
        </label>
      ))}
    </div>
  );
}

export default ExperimentList;