import React from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Card } from './elements';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main css={`
        background: lightgreen;
        h2 {
          font-size: 50px;
        }
      `}
      >
        <Card>
          <h2>Card Heading</h2>
          <Card.Button as="a">Say Hello</Card.Button>
          <Card.Button modifiers="cancel">Say Hello</Card.Button>
        </Card>
      </main>
    </div>
  );
}

export default App;
