import { useState, useEffect } from 'react';

function IncreaseCounter({ value }) {
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    let currentValue = 0;

    const counter = setInterval(() => {
      currentValue += value / 100;

      if (currentValue <= value) {
        setTargetValue(Math.round(currentValue));
      } else {
        setTargetValue(value);
        clearInterval(counter);
      }
    }, 20);
  }, [value]);

  return <span>{targetValue}</span>;
}

export default IncreaseCounter;
