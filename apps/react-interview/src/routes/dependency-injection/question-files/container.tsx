import { Suspense, useCallback } from "react";
import SearchInput from "./search-input";
import ListItems from "./list-items";

function Container() {

  const handleSearch = useCallback(() => {
    // here start searching
  }, [])

  return (
    <div>
      <SearchInput
        inputProps={{
          onChange: handleSearch
        }}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <ListItems />
      </Suspense>
    </div>
  )
}

export default Container;