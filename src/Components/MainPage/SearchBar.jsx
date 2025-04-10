import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchBar() {
  const [searchkeyword, setSearchKeyword] = useState("");
  const [email, setEmail] = useState([]);
  const navigate = useNavigate();

  console.log("the search bar will run twce");
  const activeAccount = useSelector((state) => state.active.activeAccount);

  useEffect(() => {
    setSearchKeyword("");
    setEmail([]);
  }, [activeAccount]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchkeyword.length === 0) navigate("/home");
      else navigate(`/home/search?query=${searchkeyword}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchkeyword]);
  function searchHandler(e) {
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
  }
  return (
    <input
      type="text"
      className="border-1 border-gray-600 w-[100%] py-2 rounded-[5px] px-3"
      onChange={searchHandler}
      placeholder="Search..."
      value={searchkeyword}
    />
  );
}

export default SearchBar;
