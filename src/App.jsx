import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";
import Messages from "./components/Messages/Messages";

import { storiesData } from "./components/mocks/stories";
import { postsData } from "./components/mocks/posts";
import { userData } from "./components/mocks/user";
import { messagesData } from "./components/mocks/messages";

import "./App.css";

function App() {
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState(messagesData);

  const [section, setSection] = useState("home");
  const [camera, setCamera] = useState(false);

  //Chiamata api per i post
  useEffect(() => {
    fetch("https://api.npoint.io/0bbd7ce74b73f5bfb5e9")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    //Chiamata api per le stories
    fetch("https://api.npoint.io/c75cbe96b4d90aa4ba7d")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);
  useEffect(() => {
    //Chiamata api per i message
    fetch("https://api.npoint.io/f7e5005c3479dfb77292")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera camera={camera} setCamera={setCamera} />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <Messages messages={messages} user={user} />;
    }
  };

  return (
    <div className="App">
      <TopBar setSection={setSection} setCamera={setCamera} />
      {onSectionRender()}
    </div>
  );
}

export default App;
