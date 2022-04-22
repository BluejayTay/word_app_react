const UserMessage = ({ user }) => {
  return (
    <div>
      <h1 id="header" className="h1 text-center">
        Welcome back to <span className="h1 brand-style">WerdNerd</span>,{" "}
        {user["email"]}!
      </h1>
    </div>
  );
};

export default UserMessage;
