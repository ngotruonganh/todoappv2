import { Col, Radio, Row } from "antd";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import todosSlice from "../TodoList/todosSlice";

export default function Sort() {
  // const dispatch = useDispatch();

  const [type, setType] = useState("az");

  const changeType = (e) => {
    setType(e.target.value);
    // dispatch(todosSlice.actions.sortTodo());
  };

  return (
    <Row>
      <Col>
        <Radio.Group value={type} onChange={changeType}>
          <Radio value="az">A-Z</Radio>
          <Radio value="za">Z-A</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}
