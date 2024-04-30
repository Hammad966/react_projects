import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("hammad966");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        if(data) {
            setUserData(data);
            setUserName("");
            setLoading(false);
        }
    }

    const handleSubmit = () => {
        fetchGithubUserData();
    };

    useEffect(() => {
     fetchGithubUserData()
    }, [])
    
    if(loading) {
        return <div>Loading data! Please wait..</div>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" className="text-black" name="search-by-username"
                placeholder="Search Github Username.."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData}/> : null}
        </div>
    )
}