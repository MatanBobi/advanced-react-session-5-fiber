import React, { useState, useDeferredValue } from "react";
import "./App.css";
import { sendAnalyticsPing } from "./helpers/utils";
import {
  unstable_IdlePriority,
  unstable_runWithPriority,
  unstable_scheduleCallback,
} from "scheduler";
import Header from "./Header";
import SearchBox from "./SearchBox";
import PokemonsList from "./PokemonsList";
import Description from "./Description";

export function App() {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (value: string) => {
    setInputValue(value);
    sendAnalyticsPing(value);
  };

  return (
    <div className="App">
      <Header>Pokédex</Header>
      <SearchBox inputValue={inputValue} onChange={onInputChange} />
      <PokemonsList searchValue={inputValue} />
      <Description />
    </div>
  );
}
