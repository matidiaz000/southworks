import { useState, type SetStateAction } from "react";

function FilterComponent({ sendDataToParent }: any) {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    // Update the state with the current input value
    setInputValue(event.target.value);
    sendDataToParent(inputValue)
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search items..."
        value={inputValue}
        onChange={handleInputChange} // Call the handler on input change
      />
    </>
  )
}

export default FilterComponent
