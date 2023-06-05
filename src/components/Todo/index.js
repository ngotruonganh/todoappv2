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

  const deleteTodo = () => {
    dispatch(todoListSlice.actions.deleteTodo(id));
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
          justifyContent: "flex-end",
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
            width: "100px",
          }}
        >
          {prioriry}
        </Tag>
        <Tag onClick={deleteTodo}>Delete</Tag>
      </Col>
    </Row>
  );
}
