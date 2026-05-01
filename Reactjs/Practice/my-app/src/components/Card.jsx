import { useState } from "react";

export function Card(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
