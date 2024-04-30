import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggesstions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const fetchListOfUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    if(data && data.users && data.users.length) {
      setUsers(data.users.map((item) => item.firstName));
      setLoading(false);
      setError(null);
    }
    } catch (error) {
      setLoading(false);
      setError(error)
    }
    
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleClick = (e) => {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  };

  return (
    <>
      <div className="flex justify-center bg-violet-400">
        <div className="flex flex-col">
          {loading ? (
            <div>Loading data! Please wait..</div>
          ) : (
            <input
              type="text"
              className="my-10 rounded-full px-6 py-2 bg-gray-700 outline-none"
              value={searchParam}
              placeholder="Search Users here.."
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className="flex ml-[47%] my-5">
        {showDropdown && (
          <Suggestions handleClick={handleClick} data={filteredUsers} />
        )}
      </div>
    </>
  );
}
