import hiragana from "./assets/hiragana_alphabet.json";
import { useState } from "react";
import { LetterChecker, revert_dic, BasicChecker } from "./logic";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Hiragana() {
  const [mode, setMode] = useState(0);
  return (
    <div className="bg-warning">
      <DropdownButton
        title="Mode"
        variant="success"
        className="position-absolute"
        style={{ top: "10px", left: "10px" }}
      >
        <Dropdown.Item onClick={() => setMode(0)}>Jap 2 Jing</Dropdown.Item>
        <Dropdown.Item onClick={() => setMode(1)}>Jing 2 Jap</Dropdown.Item>
        <Dropdown.Item onClick={() => setMode(2)}>Jap Typing</Dropdown.Item>
      </DropdownButton>
      {mode === 0 && <LetterChecker dic={hiragana} />}
      {mode === 1 && <LetterChecker dic={revert_dic(hiragana)} />}
      {mode === 2 && <BasicChecker letters={Object.keys(hiragana)} />}
    </div>
  );
}
