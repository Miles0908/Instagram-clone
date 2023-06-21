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
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);
  const [messages,setMessages]=useState(messagesData)

  const [section, setSection] = useState("home");

  /*   1)useEffect che però genera un loop infinito
   useEffect(()=>{
    console.log(2)
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
    .then(res=> res.json())
    .then((data=>setPosts(data)))
   }) */
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
    //Chiamata api per le stories
      fetch("https://api.npoint.io/f7e5005c3479dfb77292")
        .then((res) => res.json())
        .then((data) => setMessages(data));
    }, []);



  /*      //QUESTO è LO USE EFFECT CON LE DIPENDENZE CHE DOPO OGNI RERENDERING DELLA DIPENDENZA LUI ESEGUIRA DI NUOVO LO USE EFFECT(BEST PRACTICES NON DICHIARARE DIPENDENDENZE CHE MUTANO PERCHé CREEREBBE UN LOOP)
  useEffect(()=>{
    console.log(2)
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
    .then(res=> res.json())
    .then((data=>setPosts(data)))
   },[stories]) ; */

  /*   useEffect(() => {
    console.log("Ho invocato lo useEffect");
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    return () => {
      console.log("ho invocato il return dell'useEffect");
      //clean-up function
    };
  }, [stories]);
 */

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            {/* <button onClick={onHandleClick1}>Cliccami! Cliccami! stories</button>
    <button onClick={onHandleClick2}>Cliccami! Cliccami! posts</button> */}
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <Messages messages={messages} user={user}/> ;
    }
  };

  return (
    
      <div className="App">
        <TopBar setSection={setSection} />
        {onSectionRender()}
       
      </div>
    )
  
}

export default App;
