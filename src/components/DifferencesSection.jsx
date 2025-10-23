import Button from './Button/Button';
import { useState } from 'react';
import { differences } from '../data';

export default function DifferencesSection() {
  // useState always write inside the component or another hook! And always on the top level.

  const [contentType, setContentType] = useState(null);
  console.log('App render');

  function handleClick(type) {
    setContentType(type);

    //content = type;
  }
  return (
    <section>
      <h3>What makes me different</h3>
      <Button
        isActive={contentType === 'way'}
        onClick={() => handleClick('way')}
      >
        Approach
      </Button>
      <Button
        isActive={contentType === 'easy'}
        onClick={() => handleClick('easy')}
      >
        Availability
      </Button>
      <Button
        isActive={contentType === 'program'}
        onClick={() => handleClick('program')}
      >
        Concentration
      </Button>

      {/* {contentType ? (
                    <p>{differences[contentType]}</p>
                  ) : (
                    <p>Click on the button</p>
                  )} */}

      {/* {!contentType ? <p>Click on the button</p> : null}
                  {contentType ? <p>{differences[contentType]}</p> : null} */}

      {!contentType && <p>Click on the button</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {/* {tabContent} */}
    </section>
  );
}
