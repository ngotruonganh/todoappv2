import { Typography, Divider, Row, Col } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <Row>
      <Col
        xs={22}
        xl={12}
        style={{
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
        }}
      >
        <Title style={{ textAlign: "center" }}>
          TODO APP with REDUX Toolkit
        </Title>
        <Filters />
        <Divider />
        <TodoList />
      </Col>
    </Row>
  );
}

export default App;
