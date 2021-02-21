import React from "react";
import { Container, Header, Content, Footer } from "rsuite";
import "rsuite/lib/styles/index.less";
import { MySpace, KPTBoard, FooterContent } from "./components";

function App() {
  return (
    <div className="app">
      <Container>
        <Header>
          <h2>ふりかえり</h2>
        </Header>
        <Content>
          <KPTBoard />
          <MySpace />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Container>
    </div>
  );
}

export default App;
