function InternCard({ name, role, team }) {
  return (
    <article className="intern-card">
      <div className="avatar">{name[0]}</div>
      <h2>{name}</h2>
      <p>{role}</p>
      <span>{team} team</span>
    </article>
  );
}

export default InternCard;