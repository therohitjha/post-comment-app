import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Thread from "./components/Thread";
import Err from "./Err";
import { v4 as uuid } from "uuid";
import "./app.scss";
export const ThreadContext = createContext();

function App() {
  const [post, setPost] = useState({ title: "", content: "" });
  const [comments, setComments] = useState({ name: "", reply: "" });
  const [thread, setThread] = useState([]);
  const [threadPost, setThreadPost] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" || name === "content") {
      setPost((prevData) => {
        return { ...prevData, [name]: value };
      });
    } else {
      setComments((prevData) => {
        return { ...prevData, [name]: value };
      });
    }
    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = uuid();
    if (post.title || post.content) {
      post.id = id;
      setThread((prevData) => [...prevData, post]);
      setPost({ title: "", content: "" });
    } else {
      setThread((prevData) => {
        const data = thread.find((_) => _.id === threadPost.id);

        comments.id = id;
        if (!data.comments) {
          data.comments = [comments];
        } else {
          data.comments = [...data.comments, comments];
        }
        return [...prevData];
      });
      setComments(() => {
        return { name: "", reply: "" };
      });
    }
  };
  return (
    <Router>
      <ThreadContext.Provider
        value={{
          post,
          thread,
          setThread,
          setThreadPost,
          threadPost,
          handleChange,
          handleSubmit,
          setComments,
          comments,
        }}
      >
        <div className="header">
          <NavLink to="/">
            <h4>Home</h4>
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/thread" component={Thread} />
          <Route component={Err} />
        </Switch>
      </ThreadContext.Provider>
    </Router>
  );
}

export default App;
