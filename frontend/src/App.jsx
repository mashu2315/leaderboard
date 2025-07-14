import { useState, useEffect } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';
import Background from './components/Background';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [loading1, setLoading1] = useState(false);
  const [loading, setLoading] = useState(false);

  // Base URL for API calls
 // const API_URL = 'http://localhost:4000/api';
  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;
  

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data.users);
      console.log("Fetched users response:", response.data.users);
      if (response.data.length > 0 && !selectedUserId) {
        setSelectedUserId(response.data[0]._id);
      }
    } catch (error) {
      setMessage('Error fetching users');
    }
  };

  // Fetch leaderboard
  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${API_URL}/leaderboard`);
      setLeaderboard(response.data);
    } catch (error) {
      setMessage('Error fetching leaderboard');
    }
  };

  // Fetch claim history
  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/claim-history`);
      setHistory(response.data);
    } catch (error) {
      setMessage('Error fetching history');
    }
  };

  // Initialize data
  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
    fetchHistory();
    const interval = setInterval(fetchLeaderboard, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Add new user
  const handleAddUser = async () => {
    if (!newUserName.trim()) {
      setMessage('Please enter a user name');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users`, { name: newUserName });
      setUsers([...users, response.data]);
      console.log("Users",users);
      setNewUserName('');
      setMessage('User added successfully');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error adding user');
    }
    setLoading(false);
  };

  // Claim points
  const handleClaim = async () => {
    if (!selectedUserId) {
      setMessage('Please select a user');
      return;
    }
    setLoading1(true);
    try {
      const response = await axios.post(`${API_URL}/claim`, { userId: selectedUserId });
      setMessage(`${response.data.name} received ${response.data.pointsAwarded} points!`);
      fetchLeaderboard();
      fetchHistory();
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error claiming points');
    }
    setLoading1(false);
  };

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Background/>
    
       <main>
        <div className="container mx-auto p-4 max-w-4xl z-50">
      <h1 className="text-3xl mt-10 font-extrabold text-gray-900 text-center mb-6 dark:text-white md:text-3xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Leaderboard</span></h1>
      
      
      {/* User Selection and Claim */}
      
      <div className="bg-gradient-to-b from-[#fef5ff] via-[#f4e6ff] to-white p-6 rounded-2xl shadow-xl mb-8 border border-purple-200 animate-fadeIn">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">🎯 Claim Points</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
        <ClaimButton onClaim={handleClaim} loading1={loading1} />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          className="border border-purple-200 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder="Enter new user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleAddUser}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </div>

      {message && (
        <p className="mt-4 text-center text-red-500 animate-pulse">{message}</p>
      )}
    </div>

      {/* Leaderboard */}
      <Leaderboard leaderboard={leaderboard} />

      {/* Claim History */}
      <ClaimHistory history={history} />
    </div>
     
       </main>
    </div>
  );
}

export default App;