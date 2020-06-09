import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ThreadContext } from "../App";


function ThreadList() {
  const { thread, setThreadPost } = useContext(ThreadContext);
  console.log(thread);
  return (
   <>
      {thread &&
        thread.map((_) => (
          <NavLink to="/thread" key={uuid()} className="post__list">
            <li onClick={() => setThreadPost(_)}>{_.title}</li>
          </NavLink>
        ))}
        </>
  );
}

export default ThreadList;
