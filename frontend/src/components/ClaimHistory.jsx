
import React from 'react';

function ClaimHistory({ history }) {
  return (
    <div className="bg-gradient-to-b from-[#fef5ff] via-[#f4e6ff] to-[#ffffff] p-6 rounded-2xl shadow-xl mb-8 border border-purple-200">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center animate-fadeIn">
        🧾 Claim History
      </h2>

      <table className="w-full text-sm rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-purple-100 text-purple-800 text-left">
            <th className="p-3">User</th>
            <th className="p-3 text-center">🔥 Points</th>
            <th className="p-3">🕒 Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record, index) => (
            <tr
              key={index}
              className="border-b border-purple-100 hover:bg-purple-50 transition duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td className="p-3 text-gray-800 font-medium">{record.userName}</td>
              <td className="p-3 text-center text-orange-500 font-semibold animate-pulse">
                {record.points}
              </td>
              <td className="p-3 text-gray-500">
                {new Date(record.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimHistory;



