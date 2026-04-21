import useFetch from "../hooks/useFetch";

function Users() {
  const users = useFetch("https://typicode.com");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>
      
      {/* This 'users &&' part prevents the blank screen/crash while loading */}
      {users && users.length > 0 ? (
        users.map((user) => (
          <p key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </p>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default Users;