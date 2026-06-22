import { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>

      {students.map((s) => (
        <div key={s.id}>
          <h3>{s.first_name} {s.last_name}</h3>
          <p>{s.student_id}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
