import "../styles/Core.css";
import { BadgeCard } from "./BadgeCard";
import { SiReact, SiTypescript, SiKotlin, SiPython, SiDart, SiJavascript, SiFlutter } from 'react-icons/si';
import { FaJava, FaCss3, FaHtml5, FaNode } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri"
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Card } from "@mantine/core";

const Projects = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'AI Phone Bot',
      description: 'An AI Phone Bot using the Pipecat framework alongside Twilio API, integrating TTS, STT, and an LLM, and deployed on Render for on-demand access',
      badges: [
        { emoji: <SiPython size={16} />, label: 'Python' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'PetPal: A Pet Care App',
      description: 'A full stack mobile app for pet management, sitter matching, and pet info storage. Implemented real-time updates for pet sitter appointments and backend APIs to support multi-user coordination',
      badges: [
        { emoji: <SiKotlin size={16} />, label: 'Kotlin' },
        { emoji: <RiFirebaseFill size={16} />, label: 'Firebase' },
        { emoji: <SiJavascript size={16} />, label: 'Javascript' },
        { emoji: <FaNode size={16} />, label: 'Nodejs' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1652451764453-eff80b50f736?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Wordle Clone',
      description: 'A wordle clone with letter-matching, word generation, and a win-lose system.',
      badges: [
        { emoji: <SiFlutter size={16} />, label: 'Flutter' },
        { emoji: <SiDart size={16} />, label: 'Dart' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Canvas App',
      description: 'A collaborative real-time drawing app with WebSockets to enable multiple users to simultaneously draw and see each other\'s cursor positions and drawings in real-time on a shared canvas. ',
      badges: [
        { emoji: <SiReact size={16} />, label: 'React' },
        { emoji: <SiTypescript size={16} />, label: 'TypeScript' },
        { emoji: <FaCss3 size={16} />, label: 'CSS' },
        { emoji: <FaHtml5 size={16} />, label: 'HTML' },
        { emoji: <FaNode size={16} />, label: 'Nodejs' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Compiler',
      description: 'A compiler for the Lox language made through following the book Crafting Interpreters.',
      badges: [
        { emoji: <FaJava size={16} />, label: 'Java' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Website',
      description: 'The website you are on now!',
      badges: [
        { emoji: <SiReact size={16} />, label: 'React' },
        { emoji: <SiJavascript size={16} />, label: 'Javascript' },
      ],
    }
  ]
  return (
    <div id="projects" className="card" style={{ paddingBottom: "500px" }}>
      <div className="card-content">
        <div className="card-subheading">Projects</div>
        <Carousel
          slideSize="100%"
          align="center"
          slidesToScroll={1}
          loop
          withIndicators
          controlSize={48}
          controlsOffset="1px"
        >
          {projects.map((project, index) => (
            <Carousel.Slide key={index}>
              <Card
                padding="xl"
                radius="md"
                style={{
                  minHeight: "300px",
                  paddingLeft: "3.5rem",
                  paddingRight: "3.5rem",
                }}
              >
                <BadgeCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  badges={project.badges}
                />
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
