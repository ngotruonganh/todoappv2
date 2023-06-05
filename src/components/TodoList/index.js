import { Col, Row, Input, Button, Select, Tag, Form } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todosSlice";
import { CSVLink } from "react-csv";
import Sort from "../Sort";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Completed", key: "completed" },
    { label: "Priority", key: "priority" },
  ];

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    if (!todoName) {
      alert("Please add your to do name");
    } else {
      dispatch(
        todoListSlice.actions.addTodo({
          id: uuidv4(),
          name: todoName,
          priority: priority,
          completed: false,
        })
      );
      setTodoName("");
      setPriority("Medium");
    }
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(70vh - 120px)", overflowY: "hidden" }}>
      <Sort />
      <Col
        span={24}
        style={{
          height: "calc(100% - 150px)",
          overflowY: "scroll",
          marginTop: "20px",
        }}
      >
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <CSVLink data={todoList} filename={"my-file.csv"} headers={headers}>
        <Button>Import</Button>
      </CSVLink>
      <CSVLink data={todoList} filename={"my-file.csv"} headers={headers}>
        <Button>Export</Button>
      </CSVLink>
      <Col span={24}>
        <Form onSubmit={handleAddButtonClick}>
          <Input.Group style={{ display: "flex" }} compact>
            <Input value={todoName} onChange={handleInputChange} />
            <Select
              defaultValue="Medium"
              value={priority}
              onChange={handlePriorityChange}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
            <Button
              type="primary"
              onClick={handleAddButtonClick}
              htmlType="submit"
            >
              Add
            </Button>
          </Input.Group>
        </Form>
      </Col>
    </Row>
  );
}
