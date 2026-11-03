import InternCard from "./InternCard";
import "./App.css";

const interns = [
  { id: 101, name: "Anu", role: "React Intern", team: "Platform" },
  { id: 102, name: "Rithika", role: "UI Intern", team: "Learning" },
  { id: 103, name: "Maya", role: "Frontend Intern", team: "Web" },
  { id: 104, name: "Ravi", role: "Product Intern", team: "Delivery"}
];

function App() {
  return (
    <main className="page">
      <h1>Meet the Interns</h1>
      <p className="intro">Our new frontend team</p>

      <section className="card-grid">
        {interns.map((intern) => (
          <InternCard
            key={intern.id}
            name={intern.name}
            role={intern.role}
            team={intern.team}
          />
        ))}
      </section>
    </main>
  );
}

export default App;