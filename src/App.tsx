import React from "react";
import { Container, Header, Content, Footer } from "rsuite";
import "rsuite/lib/styles/index.less";
import { KPTBoard, FooterContent } from "./components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="app">
      <Container>
        <Header>
          <h2>kpt it!</h2>
        </Header>
        <Content>
          <DndProvider backend={HTML5Backend}>
            <KPTBoard />
            {/* <MySpace /> */}
          </DndProvider>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Container>
    </div>
  );
}

export default App;
