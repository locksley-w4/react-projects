import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const InputForm = ({ query, setQuery, updateFnc }) => {
  return (
    <form className="inputForm">
      <label htmlFor="query"><h2>Запрос</h2></label>
      <MyInput
        id="query"
        placeholder="Enter Query (..e.g City)"
        value={query}
        onChange={(ev) => {
          setQuery(ev.target.value);
        }}
      />
      <MyButton
        type="submit"
        onClick={(ev) => {
          ev.preventDefault();
          updateFnc()
        }}>
        Update
      </MyButton>
    </form>
  );
};

export default InputForm;
