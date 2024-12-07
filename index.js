```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [dynamicValue, setDynamicValue] = useState(null);

  useEffect(() => {
    setDynamicValue(Math.random());
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {dynamicValue !== null && <p>Dynamic value: {dynamicValue}</p>}
    </div>
  );
}
```