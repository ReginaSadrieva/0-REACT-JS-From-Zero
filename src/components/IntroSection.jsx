import React from 'react';

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">REGINA SADRIEVA</h1>
//       <h3 className="centered" style={{ color: '#666' }}>
//         IT expert makes progress inevitable
//       </h3>
//     </section>
//   );
// }

const e = React.createElement;

export default function IntroSection() {
  return e('section', null, [
    e('h1', { className: 'centered', key: 1 }, 'REGINA SADRIEVA'),
    e(
      'h3',
      { className: 'centered', style: { color: '#666' }, key: 2 },
      'Constant learning makes progress inevitable'
    ),
  ]);
}
