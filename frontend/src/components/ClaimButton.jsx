function ClaimButton({ onClaim, loading1 }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      onClick={onClaim}
      disabled={loading1}
    >
      {loading1 ? 'Claiming...' : 'Claim Points'}
    </button>
  );
}

export default ClaimButton;