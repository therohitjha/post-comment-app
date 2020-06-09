import React, { useContext } from "react";
import ThreadList from "./ThreadList";
import { ThreadContext } from "../App";
import { Button, Form, Input,TextArea } from "semantic-ui-react";
function Home() {
  const { handleSubmit, handleChange, post } = useContext(ThreadContext);

  return (
    <div className="app">
      <Form onSubmit={handleSubmit} className='home__form'>
        <Input
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title..."
          className="input__post"
        />
        <TextArea
          name="content"
          value={post.content}
          onChange={handleChange}
          placeholder="Something in mind?"
          className="input__post"
        />
        <Button content="Post" primary type="submit" style={{margin:'.5rem'}}/>
      </Form>
      <ThreadList />
    </div>
  );
}

export default Home;
