import * as React from 'react';
import { useRef, useState } from 'react';
import { UseResizeObserverCallback, useDebouncedCallback, useResizeObserver } from '../..';

export const Example: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRectReadOnly>();
  useResizeObserver(ref, (e) => setRect(e.contentRect));

  return (
    <div>
      <pre>{JSON.stringify(rect)}</pre>
      <div
        ref={ref}
        style={{
          minWidth: 100,
          minHeight: 100,
          resize: 'both',
          overflow: 'auto',
          background: 'red',
        }}>
        resize me UwU
      </div>
    </div>
  );
};

export const ExampleDebounced: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRectReadOnly>();
  const cb = useDebouncedCallback(
    ((e) => setRect(e.contentRect)) as UseResizeObserverCallback,
    [setRect],
    500
  );
  useResizeObserver(ref, cb);

  return (
    <div>
      <pre>{JSON.stringify(rect)}</pre>
      <div
        ref={ref}
        style={{
          minWidth: 100,
          minHeight: 100,
          resize: 'both',
          overflow: 'auto',
          background: 'red',
        }}>
        resize me UwU
      </div>
    </div>
  );
};
