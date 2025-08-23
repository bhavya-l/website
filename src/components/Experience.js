import "../styles/Core.css";
import { Carousel } from "@mantine/carousel";
import { Card, Text, Group, List } from "@mantine/core";
import "@mantine/carousel/styles.css";

const Experience = () => {
  const slides = [
    {
      title: "Software Engineer",
      company: "Vivid Seats",
      description: [
        "Optimized partner site usability by developing Vue.js components (e.g. price sort, quantity selector) from Figma specs, enabling smoother ticket browsing and increasing customer engagement.",
        "Designed and maintained RESTful APIs using Python/FastAPI, integrated Datadog for real-time monitoring, and documented 10+ endpoints on Stoplight, reducing dev onboarding time by 30%.",
        "Collaborated on React migration for legacy checkout flow: scopted 30+ tickets, planned architecture, and built 10+ resuable and core components, streamlining the purchase path for thousands of users.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "QBuild Software",
      description: [
        "Engineered flagship product migration from .NET to React to enhance scalability, maintainability, and user experience; refactored 10+ UI components for 25% faster load times and improved cross-browser compatibility.",
        "Boosted CRM efficiency by delivering 10+ new features and resolving 60+ bugs using SQL, C#, and .NET, reducing ticket backlog by 55% for client support teams.",
        "Built 4+ new CRM pages (e.g., task scheduler) using .NET, Kendo UI, and C#, improving UX and stability based on feedback from other departments who use the product."
      ],
    },
    {
      title: "Test Analyst",
      company: "Toronto Transit Commission",
      description: [
        "Automated update process for 4000+ telephones using a custom VBScript tool, reducing deployment time by over 90% (from 2 weeks to 4 hours).",
        "Authored 50+ detailed test cases for new TTC web features using Selenium, ensuring consistent QA coverage and reducing post-release defects by 30%.",
        "Co-led a 1-hour internal workshop on modern design techniques, prompting adoption of UX improvements on webpages."
      ],
    },
    {
      title: "Application Developer",
      company: "Dale Brain Injury Services",
      description: [
        "Automated update process for 4000+ telephones using a custom VBScript tool, reducing deployment time by over 90% (from 2 weeks to 4 hours).",
        "Authored 50+ detailed test cases for new TTC web features using Selenium, ensuring consistent QA coverage and reducing post-release defects by 30%.",
        "Co-led a 1-hour internal workshop on modern design techniques, prompting adoption of UX improvements on webpages."
      ],
    },
    {
      title: "Marketing Intern",
      company: "Syngli Inc",
      description: [
        "Improved public perception of the company by revising and updating its Wikipedia pages to align with the redesigned website.",
        "Enhanced the company's website usability by implementing tooltips, FAQ pages, and publishing multiple blog posts.",
        "Increased website visibility and engagement by optimizing company blog posts with SEO best practices."
      ],
    },
  ];

  return (
    <div id="experience" className="card">
      <div className="card-content">
        <div className="card-subheading">Experience</div>
        <Carousel
          slideSize="100%"
          align="center"
          slidesToScroll={1}
          loop
          withIndicators
          controlSize={48}
          controlsOffset="1px"
        >
          {slides.map((item, index) => (
            <Carousel.Slide key={index}>
              <Card
                padding="xl"
                radius="md"
                style={{
                  minHeight: "300px",
                  paddingLeft: "5.5rem",
                  paddingRight: "5.5rem",
                }}
              >
                <Group justify="space-between" mb="md" align="flex-start">
                  {/* Job Title */}
                  <Text fw={700} style={{ color: "#3D2B1F", fontSize: "32px" }}>
                    {item.title}
                  </Text>

                  {/* Company Name */}
                  <Text
                    style={{
                      color: "#3D2B1F",
                      fontSize: "24px",
                      fontStyle: "italic",
                      fontWeight: 500,
                    }}
                  >
                    {item.company}
                  </Text>
                </Group>

                {/* Content */}
                <List
                  spacing="sm"
                  style={{
                    color: "#3D2B1F",
                    textAlign: "left",
                    fontSize: "24px",
                    lineHeight: "1.5",
                  }}
                >
                  {item.description.map((line, i) => (
                    <List.Item key={i}>{line}</List.Item>
                  ))}
                </List>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
