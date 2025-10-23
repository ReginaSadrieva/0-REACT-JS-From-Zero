import Header from './components/Header/Header';
import LearningSection from './components/LearningSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import { Fragment } from 'react'; // or just <> </>, Fragment is used instead of div
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';
import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('feedback');
  return (
    <Fragment>
      <Header />
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
      </main>
    </Fragment>
  );
}
