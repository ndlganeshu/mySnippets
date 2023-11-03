import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AutoComplete() {
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1').then((res) => {
      const data = res.data.data.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      console.log('---datea---', data);
      setNames(data);
    });
  }, []);
  const handleSearch = (ev) => {
    console.log('--val---', ev.target.value);
    const out = ev.target.value
      ? names.filter((val) =>
          val.first_name.toLowerCase().includes(ev.target.value)
        )
      : names;
    console.log('-----', out);
    // setNames();
  };
  return (
    <div>
      <h1>Hello StackBlitz!112</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onChange={handleSearch} list="users" />
      <datalist id="users">
        {names.map((nm, ind) => {
          return <option key={ind}>{nm.first_name}</option>;
        })}
      </datalist>
    </div>
  );
}
