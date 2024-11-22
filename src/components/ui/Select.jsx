import React, { useState } from "react";


export const Select = ({ children }) => {
  return <div className="relative w-full">{children}</div>;
};


export const SelectTrigger = ({ placeholder, onClick, value }) => {
  return (
    <button
      className="w-full px-4 py-2 border rounded-md bg-white text-left focus:outline-none focus:ring"
      onClick={onClick}
    >
      {value || placeholder || "Select an option"}
    </button>
  );
};


export const SelectContent = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg">
      {children}
    </div>
  );
};


export const SelectItem = ({ value, onSelect }) => {
  return (
    <div
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      {value}
    </div>
  );
};


export const SelectValue = ({ value }) => {
  return <span>{value}</span>;
};


export const SelectContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false); 
  };

  return (
    <Select>
      <SelectTrigger
        placeholder="Choose a type"
        onClick={toggleDropdown}
        value={selectedValue}
      />
      <SelectContent isOpen={isOpen}>
        <SelectItem value="workshop" onSelect={handleSelect} />
        <SelectItem value="conference" onSelect={handleSelect} />
        <SelectItem value="certification" onSelect={handleSelect} />
        <SelectItem value="training" onSelect={handleSelect} />
      </SelectContent>
    </Select>
  );
};
