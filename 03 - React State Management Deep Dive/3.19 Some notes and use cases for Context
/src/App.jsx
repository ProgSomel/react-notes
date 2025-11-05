import Section from "./components/Section";
import Heading from "./components/Heading";
import Post from "./components/Post";
import "./styles.css";
import AllPosts from "./components/AllPosts";

export default function App() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
