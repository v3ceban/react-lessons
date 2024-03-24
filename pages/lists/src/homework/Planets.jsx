/* eslint-disable react/prop-types */
export function GasPlanets(props) {
  return (
    <>
      <h2>Gas planets</h2>
      <ul>
        {props.planets.map((planet, key) => {
          return (
            planet.isGasPlanet && (
              <Planet
                key={key}
                name={planet.name}
                isGasPlanet={planet.isGasPlanet}
              />
            )
          );
        })}
      </ul>
    </>
  );
}

export function NonGasPlanets(props) {
  return (
    <>
      <h2>Non-gas planets</h2>
      <ul>
        {props.planets.map((planet, key) => {
          return (
            !planet.isGasPlanet && (
              <Planet
                key={key}
                name={planet.name}
                isGasPlanet={planet.isGasPlanet}
              />
            )
          );
        })}
      </ul>
    </>
  );
}

export function Planet(props) {
  return <li>{props.name}</li>;
}
