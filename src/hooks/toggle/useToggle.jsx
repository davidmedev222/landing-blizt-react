import { useState } from 'react';

const useToggle = () => {
  const [toggle, updateToggle] = useState(false);

  const onToggle = () => updateToggle(!toggle);

  return { toggle, onToggle };
};

export { useToggle };
