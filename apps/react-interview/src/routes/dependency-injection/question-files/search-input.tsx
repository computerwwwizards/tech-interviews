import { type InputHTMLAttributes } from "react";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

function SearchInput({ ...props }: SearchInputProps) {

  return (
    <div>
      <input placeholder="Search..." {...props}  />
    </div>
  )
}

export default SearchInput;