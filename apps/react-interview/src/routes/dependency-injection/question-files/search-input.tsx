import { type InputHTMLAttributes } from "react";

export interface SearchInputProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

function SearchInput({ inputProps }: SearchInputProps) {

  return (
    <div>
      <input {...inputProps} placeholder="Search..." />
    </div>
  )
}

export default SearchInput;