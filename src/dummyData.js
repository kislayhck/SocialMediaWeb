import person1 from "./assets/person/1.jpg";
import person2 from "./assets/person/2.jpg";
import person3 from "./assets/person/3.jpg";
import person4 from "./assets/person/4.jpg";
import person5 from "./assets/person/5.jpg";

import post1 from "./assets/post/p1.jpeg";
import post2 from "./assets/post/p2.jpg";
import post3 from "./assets/post/p3.jpg";
import post4 from "./assets/post/p4.jpg";
import post5 from "./assets/post/p5.jpeg";

export const Users = [
  {
    id: 1,
    profilePicture: person1,
    username: "user1",
  },
  {
    id: 2,
    profilePicture: person2,
    username: "user2",
  },
  {
    id: 3,
    profilePicture: person3,
    username: "Elon",
  },
  {
    id: 4,
    profilePicture: person4,
    username: "user3",
  },
  {
    id: 5,
    profilePicture: person5,
    username: "user5",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: post1,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: post2,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: post3,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: post4,
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: post5,
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
];
