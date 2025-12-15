import { useState, type SetStateAction } from "react";

function FilterComponent({ sendDataToParent }: any) {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    // Update the state with the current input value
    setInputValue(event.target.value);
    sendDataToParent(inputValue)
  };

  return (
    <div className="mb-3">
      <input
        className="p-3 w-full border-2 border-indigo-600 rounded-lg"
        type="text"
        placeholder="Buscar por nombre..."
        value={inputValue}
        onChange={handleInputChange} // Call the handler on input change
      />
    </div>
  )
}

export default FilterComponent
