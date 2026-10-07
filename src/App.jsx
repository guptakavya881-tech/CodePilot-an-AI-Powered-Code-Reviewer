import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Editor from '@monaco-editor/react';
import Select from 'react-select';
const App = () => {
  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'Go', label: 'Go' },
    { value: 'Rust', label: 'Rust' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Dart', label: 'Dart' },
    { value: 'R', label: 'R' },
    { value: 'SQL', label: 'SQL' },
  ];
  const [selectedOption, setselectedOption] = useState(options[0]);
  const styles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#18181b",
      borderColor: state.isFocused ? "#71717a" : "#3f3f46",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#71717a",
        innerWidth: "100%",
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#18181b",
      border: "1px solid #3f3f46",
      width: "100%"
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3f3f46"
        : state.isFocused
          ? "#27272a"
          : "#18181b",
      color: "#ffffff",
      "&:active": {
        backgroundColor: "#52525b",
        width: "100%"
      },
    }),

    singleValue: (base) => ({
      ...base,
      color: "#ffffff",
      width: "100%"
    }),

    placeholder: (base) => ({
      ...base,
      color: "#a1a1aa",
      width: "100%"
    }),

    input: (base) => ({
      ...base,
      color: "#ffffff",
      width: "100%"
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#a1a1aa",
      "&:hover": {
        color: "#ffffff",
        width: "100%"
      },
    }),

    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "#3f3f46",
      width: "100%"
    }),
  };
  return (
    <>
      <Navbar />
      <div className="main flex justify-between" style={{ height: "calc(100vh - 90px)" }}>
        <div className="left h-[87%] w-[50%]">
          <div className="tabs !mt-5 !px-5 !mb-3 w-full flex items-centre gap-[10px]">
            <Select
              value={options[selectedOption]}
              onChange={(e) => { setselectedOption(e) }}
              options={options}
              className="w-64"
              styles={styles}
            />
            <button className="btnNormal bg-zinc-900 min-w-[120px] tansition-all hover:bg-zinc-800">Fix Code</button>
            <button className="btnNormal bg-zinc-900 min-w-[120px] tansition-all hover:bg-zinc-800">Review</button>

          </div>
          <Editor height="100%" theme='vs-dark' language={selectedOption.value} value="// some comment" />

        </div>
        <div className="right overflow-scroll !p-[10px] bg-zinc-900 h-[100%] w-[60%]">
          <div className="topTab border-b-[1px] border-t-[1px] border-[#2727a] flex items-center justify-between h-[60px]"> 
            <p className='font-[700] text-[17px]'> Response</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App