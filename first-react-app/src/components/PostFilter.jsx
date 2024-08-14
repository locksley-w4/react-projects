import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter, style}) => {
  return (
    <div style={style}>
      <MyInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(ev) => setFilter({...filter, query: ev.target.value})}
      />

      <MySelect
        defaultValue="Сортировка"
        value={filter.sort}
        onChange={sort => setFilter({...filter, sort: sort})}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
