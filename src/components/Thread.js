import React, { useContext, useEffect, useState } from "react";
import { ThreadContext } from "../App";
import { v4 as uuid } from "uuid";
import {
  Button,
  Comment,
  Form,
  Header,
  Input,
  TextArea,
} from "semantic-ui-react";
function Thread() {
  const {
    comments,
    threadPost,
    handleChange,
    handleSubmit,
    thread,
  } = useContext(ThreadContext);
  const [reply, setReply] = useState([]);

  useEffect(() => {
    setReply(thread.find((_) => _.id === threadPost.id));
  }, [thread, threadPost]);

  return (
    <div className="thread__container">
      {threadPost ? (
        <div>
          <h3 className="post__title">{threadPost.title}</h3>
          <div className="post__content">{threadPost.content}</div>
        </div>
      ) : (
        <h2 className="center">Nothing to display</h2>
      )}

      {threadPost && (
        <Form onSubmit={handleSubmit} className="form__container">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={comments.name}
            onChange={handleChange}
            className="comment"
          />
          <TextArea
            type="text"
            name="reply"
            placeholder="Your Comment..."
            value={comments.reply}
            onChange={handleChange}
            className="comment"
          />
          <Button
            type="submit"
            content="Comment"
            primary
            style={{ margin: ".2rem" }}
          />
        </Form>
      )}
      {threadPost && (
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          {reply &&
            reply.comments?.map((_) => {
              return (
                <Comment key={uuid()}>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">{_.name}</Comment.Author>
                    <Comment.Text>{_.reply}</Comment.Text>
                  </Comment.Content>
                </Comment>
              );
            })}
        </Comment.Group>
      )}
    </div>
  );
}

export default Thread;
