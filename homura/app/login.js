export default function Login() {
  const login = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="px-6 py-3 bg-indigo-600 rounded-xl"
      >
        Login Discord
      </button>
    </div>
  );
}