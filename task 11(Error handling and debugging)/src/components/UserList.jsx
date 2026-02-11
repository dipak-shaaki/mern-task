import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // buggy code   useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/userss") // WRONG URL (intentional bug)
    //       .then(res => res.json())
    //       .then(data => setUsers(data));
    //   }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) throw new Error("Network error");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
