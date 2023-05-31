import { Row, Tag, Checkbox, Col } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todoListSlice from "../TodoList/todosSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, completed, id }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.3, textDecoration: "line-through" } : {}),
      }}
    >
      <Col span={20}>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
      </Col>
      <Col
        span={4}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Tag
          color={priorityColorMapping[prioriry]}
          style={{
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          {prioriry}
        </Tag>
      </Col>
    </Row>
  );
}
