/* eslint-disable react/prop-types */
export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      {display_n_users(5)}
    </>
  );
}

const User = (props) => {
  const name = props.name;
  return (
    <section>
      <h2>User&apos;s name is {name}</h2>
      <ul>
        <li>
          {name} is {props.age} yars old
        </li>
        <li>
          {name} is {props.height} cm tall
        </li>
        <li>
          {name} weights {props.weight} kg
        </li>
      </ul>
    </section>
  );
};

const display_n_users = (n) => {
  const users = [];
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const ages = [25, 30, 35, 40, 45];
  const heights = [170, 180, 190, 200, 210];
  const weights = [60, 70, 80, 90, 100];
  for (let i = 0; i < n; i++) {
    users.push(
      <User
        key={i}
        name={names[i]}
        age={ages[i]}
        height={heights[i]}
        weight={weights[i]}
      />,
    );
  }
  return users;
};
