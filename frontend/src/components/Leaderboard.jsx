// function Leaderboard({ leaderboard }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//       <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Rank</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Total Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboard.map(user => (
//             <tr key={user.name} className="hover:bg-gray-100">
//               <td className="border p-2 text-center">{user.rank}</td>
//               <td className="border p-2">{user.name}</td>
//               <td className="border p-2 text-center">{user.totalPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Leaderboard;




function Leaderboard({ leaderboard }) {
  return (
    <div className="bg-gradient-to-b from-[#fef5ff] via-[#dcd1e6] to-[#ffffff] p-6 rounded-2xl shadow-xl mb-8 border border-purple-200">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">🏆 Leaderboard</h2>
          {/* top 3 leaders  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {leaderboard.slice(0, 3).map((user, index) => (
          <div
            key={user.name}
            className={`flex flex-col  items-center hover:scale-105 hover:shadow-lg transition-all duration-100 hover:border-[0.05px] p-4 mx-2 rounded-xl ${
              index === 0
                ? 'bg-yellow-100 shadow-lg'
                : index === 1
                ? 'bg-gray-100'
                : 'bg-orange-100'
            }`}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mb-2">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800 text-center">{user.name}</p>
            <p className="text-lg font-semibold text-orange-500 mt-1">🔥 {user.totalPoints}</p>
            <p className="text-xs mt-1 text-purple-700 font-bold">#{user.rank}</p>
          </div>
        ))}
      </div>
        {/* Leaderboard other than 3 leaders..  */}
      <table className="w-full text-sm rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-purple-200 text-purple-800 text-left">
            <th className="p-3">Rank</th>
            <th className="p-3">Name</th>
            <th className="p-3 text-center">🔥 Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.slice(3).map(user => (
            <tr key={user.name} className="border-b border-purple-100 hover:bg-purple-50 transition">
              <td className="p-3 text-purple-800 font-bold">#{user.rank}</td>
              <td className="p-3 text-gray-700">{user.name}</td>
              <td className="p-3 text-center text-orange-500 font-semibold">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;



