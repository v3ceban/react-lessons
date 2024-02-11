/* eslint-disable react/prop-types */
export default function Job(props) {
  return (
    <>
      <h2>Person {props.id}:</h2>
      <ul>
        <li>Salary: {props.salary}</li>
        <li>Position: {props.position}</li>
        <li>Company: {props.company}</li>
      </ul>
    </>
  );
}
