import Requirements from "./Requirements";

export default function Section({ item }) {
  return (
    <section className="section">
      <div className="section__company">
        <img className="section__company__logo" src={item.logo} alt="a" />
        <h6 className="section__company__name">{item.company}</h6>
        {item.new ? <span className="btn btn-new">New!</span> : ""}
        {item.featured ? <span className="btn btn-feature">feature</span> : ""}
      </div>
      <h3 className="section__job">{item.position}</h3>
      <p className="section__data-job">
        {item.postedAt} <span> · </span> 
        {item.contract} <span> · </span>
        {item.location}
      </p>
      <Requirements
        role={item.role}
        level={item.level}
        languages={item.languages}
      />
    </section>
  );
}
