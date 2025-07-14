function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <select
      className="border rounded p-2 flex-1"
      value={selectedUserId}
      onChange={(e) => setSelectedUserId(e.target.value)}
    >
      <option value="">Select a user</option>
      {users && users.map((user) => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  );
}

export default UserSelector;