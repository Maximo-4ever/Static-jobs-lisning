export default function Requirements({ role, level, languages }) {
  return (
    <div className="requirements">
      <span>{role}</span>
      <span>{level}</span>
      {languages.map((language, index) => (
        <span key={index}>{language}</span>
      ))}
    </div>
  );
}
