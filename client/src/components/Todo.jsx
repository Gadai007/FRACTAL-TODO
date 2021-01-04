import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import {
  createTodo,
  getTodos,
  deleteTodo,
  getABucket,
  getATodo
} from "./helper/coreapicalls";
import { isAuthenticate } from "../auth/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [bucketName, setBucketName] = useState({});
  const [todo, setTodo] = useState({
    todo: ''
  });
  const [reload, setReload] = useState(false);

  const { user, token } = isAuthenticate();

  const preLoad = (userId, token, bucketId) => {
    getTodos(userId, token, bucketId).then((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        setTodos(response);
      }
    });
  };

  const nameLoad = (userId, token, bucketId) => {
    getABucket(userId, token, bucketId).then((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        setBucketName(response);
      }
    });
  };

  useEffect(() => {
    preLoad(user.id, token, props.match.params.bucketId);
  }, [reload]);

  useEffect(() => {
    nameLoad(user.id, token, props.match.params.bucketId);
  }, [reload]);

  const onChangeHandler = (event) => {
    const { name ,value } = event.target;
    setTodo(preValue => {
      return {...preValue, [name]: value}
    });
  };

  const onError = (error) => {
    toast.error(`${error}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createTodo(user.id, token, props.match.params.bucketId, todo).then(
      (response) => {
        if (response.error) {
          onError(response.error);
        } else {
          setTodo(preValue => {
            return {...preValue, todo: ''}
          });
          setReload(!reload);
        }
      }
    );
  };

  const onDeleteHandler = (todoId) => {
    deleteTodo(user.id, token, props.match.params.bucketId, todoId).then(
      (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setReload(!reload);
        }
      }
    );
  };

  const onUpdateHandler = (todoId) => {
    getATodo(user.id, token, props.match.params.bucketId, todoId).then(response => {
      setTodo(preValue => {
        return {...preValue, todo: response.todo}
      })
    })
    onDeleteHandler(todoId)
  };

  const bucketForm = () => {
    return (
      <form className="create">
        <h3 className="fs-1">Create your todo</h3>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo.todo}
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Create your todo"
          required
          autoFocus
        />
        <span className="btn btn-primary mt-2" onClick={onSubmitHandler}>
          Create
        </span>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="bucket text-uppercase">{bucketName.name} TODO's</h1>
        <div className="col-3">
          <UserInfo />
        </div>
        <div className="col-6 buckets">
          {bucketForm()}
          {todos.length === 0 ? (
            <h2 className="d-grid col-6 mb-2 create-btn">No todos created</h2>
          ) : (
            todos.map((todo) => {
              return (
                <div key={todo._id} className="d-grid col-6 mb-2 create-btn">
                  <span className="btn btn-primary">
                    <input type="checkbox" /> <span className='pe-5'>{todo.todo}</span>
                    
                    <span className="fas fa-pen pe-5" onClick={() => onUpdateHandler(todo._id)}></span>
                    <span
                      className="fas fa-trash-alt pe-2"
                      onClick={() => onDeleteHandler(todo._id)}
                    ></span>
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
