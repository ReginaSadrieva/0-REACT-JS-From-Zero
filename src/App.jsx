import Header from './components/Header/Header';
import LearningSection from './components/LearningSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import { Fragment } from 'react'; // or just <> </>, Fragment is used instead of div
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';
import EffectSection from './components/EffectSection';
import { useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState('effect');

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);
  return (
    <Fragment>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={current => setTab(current)} />

        {tab === 'main' && (
          <>
            <LearningSection />
            <DifferencesSection />
          </>
        )}
        {tab === 'feedback' && <FeedbackSection />}
        {tab === 'effect' && <EffectSection />}
      </main>
    </Fragment>
  );
}
