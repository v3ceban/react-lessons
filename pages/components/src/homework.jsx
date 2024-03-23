/* eslint-disable react/prop-types */
import jobs from "./jobs.json";

export default function Homework() {
  return (
    <>
      <h1>Homework</h1>
      {renderJobs()}
    </>
  );
}

function renderJobs() {
  const array = [];
  jobs.forEach((job, id) => {
    array.push(
      <Job
        key={id}
        company={job.company}
        position={job.position}
        salary={job.salary}
      />,
    );
  });
  return array;
}

function Job(props) {
  return (
    <ul key={props.company}>
      <li>
        {props.company}
        <ul>
          <li>Position: {props.position}</li>
          <li>Salary: {props.salary}</li>
        </ul>
      </li>
    </ul>
  );
}
