import React from "react";
export function Filtro({
  inputFocused,
  inputValue,
  label,
  setInputFocused,
  setInputValue
}) {
  return <div className="input-wrapper">
            {!inputFocused && !inputValue && <label className="input-label">{label}</label>}
            <input type="text" className="search-input" onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} value={inputValue} onChange={e => setInputValue(e.target.value)} />
          </div>;
}
  