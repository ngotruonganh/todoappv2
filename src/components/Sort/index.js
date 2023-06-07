import { Col, Radio, Row, Typography } from "antd";
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
        <Typography.Paragraph style={{ fontWeight: "bold", marginTop: 5 }}>
          Sort
        </Typography.Paragraph>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="id" disabled={value === "id"}>
            Newest
          </Radio>
          <Radio value="az" disabled={value === "az"}>
            A - Z
          </Radio>
          <Radio value="za" disabled={value === "za"}>
            Z - A
          </Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}
