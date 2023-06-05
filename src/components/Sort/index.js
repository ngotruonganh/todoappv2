import { Col, Radio, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todosSlice from "../TodoList/todosSlice";

export default function Sort() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("id");

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(todosSlice.actions.sortTodo(e.target.value));
  };

  return (
    <Row>
      <Col>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"id"}>Newest</Radio>
          <Radio value={"az"}>A - Z</Radio>
          <Radio value={"za"}>Z - A</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}
