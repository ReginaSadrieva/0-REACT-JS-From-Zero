import { useState } from 'react';
import logo from '/logo-name.svg';
import { styled } from 'styled-components';
import './Header.css';

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <img src={logo} alt={'Regina logo'} />

      <span>Current time: {now.toLocaleTimeString()}</span>
    </header>
  );
}
