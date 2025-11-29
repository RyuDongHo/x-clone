'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold">카운터</h3>
      <div className="text-4xl font-bold text-blue-600">{count}</div>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count - 1)} variant="secondary">
          -1
        </Button>
        <Button onClick={() => setCount(0)} variant="secondary">
          초기화
        </Button>
        <Button onClick={() => setCount(count + 1)}>
          +1
        </Button>
      </div>
    </div>
  );
};
