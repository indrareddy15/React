/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

type TodoItem = {
  title: string;
  description: string;
};

function TodoListComponent() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodo, setAllTodo] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodo, setCompletedTodo] = useState<TodoItem[]>([]);

  const handleTodoAdd = () => {
    let todoItem: any = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoItem: any = [...allTodo];
    updatedTodoItem.push(todoItem);
    setAllTodo(updatedTodoItem);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoItem));
    setNewTitle("");
    setNewDescription("");
  };

  const handleTodoDelete = (index: number) => {
    let deleteTodoItem: TodoItem[] = [...allTodo];
    deleteTodoItem.splice(index);
    setAllTodo(deleteTodoItem);
    localStorage.setItem("todolist", JSON.stringify(deleteTodoItem));
  };

  const handleChecked = (index: number) => {
    let now = new Date();
    let completedOn: any = `${now.getDate()}-${
      now.getMonth() + 1
    }-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    let filteredItem = {
      ...allTodo[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr: TodoItem[] = [...completedTodo];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodo(updatedCompletedArr);
    localStorage.setItem("completedTodo", JSON.stringify(updatedCompletedArr));
    handleTodoDelete(index);
  };

  const handleCompletedTodoDelete = (index: number) => {
    let deleteCompletedItem: TodoItem[] = [...completedTodo];
    deleteCompletedItem.splice(index);
    setCompletedTodo(deleteCompletedItem);
    localStorage.setItem("completedTodo", JSON.stringify(deleteCompletedItem));
  };

  useEffect(() => {
    let savedTodoList: string | null = localStorage.getItem("todolist");
    if (savedTodoList) {
      setAllTodo(JSON.parse(savedTodoList));
    }
    let savedCompletedTodo: string | null =
      localStorage.getItem("completedTodo");
    if (savedCompletedTodo) {
      setCompletedTodo(JSON.parse(savedCompletedTodo));
    }
  }, []);

  return (
    <div className="App">
      <h1>MY TODO LIST</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What is the task title"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What is the task Description "
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleTodoAdd}
              className="primary-btn"
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodo.map((item: any, index: any) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleTodoDelete(index)}
                      title="Delete?"
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleChecked(index)}
                      title="Complete?"
                    />
                  </div>
                </div>
              );
            })}
          {isCompleteScreen === true &&
            completedTodo.map((item: any, index: any) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      <small>Completed On{item.completedOn}</small>
                    </p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleCompletedTodoDelete(index)}
                      title="Delete?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TodoListComponent;
