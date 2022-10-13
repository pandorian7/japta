import { useState } from "react";
import { FormControl } from "react-bootstrap";

const LetterInput = (props) => {
  const { letter, onChange } = props;
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex flex-column text-center">
        <h1 className="p-5" style={{ fontSize: "100px" }}>
          {letter}
        </h1>
        <FormControl className="text-center" onChange={onChange} />
      </div>
    </div>
  );
};

export function LetterChecker(props) {
  const { dic } = props;
  const letters = Object.keys(dic);
  const random_letter = () => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const sound = dic[letter];
    return [letter, sound];
  };
  const [letter, setLetter] = useState(random_letter());
  const changeLetter = () => setLetter(random_letter());
  const handleUserAnswer = (e) => {
    if (
      e.target.value.toLowerCase() === letter[1] ||
      (letter[1].includes(e.target.value.toLowerCase()) &&
        Array.isArray(letter[1]))
    ) {
      e.target.value = "";
      changeLetter();
    }
  };
  return <LetterInput letter={letter[0]} onChange={handleUserAnswer} />;
}

export function BasicChecker(props) {
  const { letters } = props;
  const random_letter = () =>
    letters[Math.floor(Math.random() * letters.length)];
  const [letter, setLetter] = useState(random_letter());
  const changeLetter = () => setLetter(random_letter());
  const handleUserAnswer = (e) => {
    if (e.target.value.toLowerCase() === letter) {
      e.target.value = "";
      changeLetter();
    }
  };
  return <LetterInput letter={letter} onChange={handleUserAnswer} />;
}

export function revert_dic(dic) {
  const reverted_dic = {};
  const add_entry = (key, val) => {
    if (Object.keys(reverted_dic).includes(key)) {
      const existing_val = reverted_dic[key];
      if (Array.isArray(existing_val)) {
        reverted_dic[key] = [...existing_val, val];
      } else {
        reverted_dic[key] = [existing_val, val];
      }
    } else {
      reverted_dic[key] = val;
    }
  };
  Object.entries(dic).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach((sub_val) => add_entry(sub_val, key));
    } else {
      add_entry(val, key);
    }
  });
  return reverted_dic;
}
