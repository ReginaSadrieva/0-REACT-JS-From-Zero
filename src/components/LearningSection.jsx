import WayToLearn from './WayToLearn';
import { ways } from '../data';

export default function LearningSection() {
  return (
    <section>
      <h3>My approach to learning</h3>
      <ul>
        {ways.map(way => (
          <WayToLearn key={way.title} {...way} />
        ))}
        {/* <WayToLearn {...ways[0]} />
                    <WayToLearn {...ways[1]} />
                    <WayToLearn {...ways[2]} />
                    <WayToLearn {...ways[3]} /> */}
        {/* <WayToLearn
                      title={ways[0].title}
                      description={ways[0].description}
                    />
                    <WayToLearn
                      title={ways[1].title}
                      description={ways[1].description}
                    />
                    <WayToLearn
                      title={ways[2].title}
                      description={ways[2].description}
                    />
                    <WayToLearn
                      title={ways[3].title}
                      description={ways[3].description}
                    /> */}
      </ul>
    </section>
  );
}
