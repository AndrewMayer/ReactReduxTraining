import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
//React props
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const userNames = ["Sam", "Phil", "Mary", "Donna"];
const times = [
  {
    date: "Today",
    time: "3:33PM"
  },
  {
    date: "03/07/19",
    time: "4:44AM"
  },
  {
    date: "Yesterday",
    time: "12:01PM"
  },
  {
    date: "02/28/19",
    time: "7:39AM"
  }
];
const comments = [
  "Awesome post!",
  "I couldn't disagree more.",
  "Right on!",
  "Totally true!"
];

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        userName={userNames[0]}
        dateAgo={times[0].date}
        timeAgo={times[0].time}
        comment={comments[0]}
        userImage={Faker.image.avatar()}
      />
      <CommentDetail
        userName={userNames[1]}
        dateAgo={times[1].date}
        timeAgo={times[1].time}
        comment={comments[1]}
        userImage={Faker.image.avatar()}
      />
      <CommentDetail
        userName={userNames[2]}
        dateAgo={times[2].date}
        timeAgo={times[2].time}
        comment={comments[2]}
        userImage={Faker.image.avatar()}
      />
      <CommentDetail
        userName={userNames[3]}
        dateAgo={times[3].date}
        timeAgo={times[3].time}
        comment={comments[3]}
        userImage={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
