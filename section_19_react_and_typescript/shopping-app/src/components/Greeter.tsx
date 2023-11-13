import React from 'react';

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person}</h1>;
}

// export default function Greeter(props: GreeterProps): JSX.Element {
//   return <h1>Hello, {props.person}</h1>;
// }

// Using React FC
// const Greeter: React.FC = () => {
//   return <h1>Hello!</h1>;
// }
