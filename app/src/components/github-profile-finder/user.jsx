export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user; 

  const createdDate = new Date(created_at);

  return (
    <div className="user flex flex-col">
      <div className="flex justify-center">
        <img src={avatar_url} alt="user" className="avatar" />
      </div>
      <div className="name-container ">
        <a className="hover:text-blue-600 hover:underline" href={`https://github.com/${login}`} target="_blank">
          {name || login}
        </a>
        <p>{`User joined on ${createdDate.getDate()} ${createdDate.toLocaleString(
          "en-us",
          {
            month: "short",
          }
        )} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className="profile-info">
        <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
        </div>
        <div>
            <p>Followers</p>
            <p>{followers}</p>
        </div>
        <div>
            <p>Following</p>
            <p>{following}</p>
        </div>
      </div>
    </div>
  );
}