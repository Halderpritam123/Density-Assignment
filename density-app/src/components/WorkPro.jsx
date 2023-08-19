import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <span className="work-icon">🌟</span>;

export default function WorkPro() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-lg" style={{textAlign:"left",paddingLeft:"11%"}}>Wrong with self-improvement & how we're fixing it.</p>
        <h1 className="text-4xl font-bold mb-4" style={{textAlign:"left",paddingLeft:"11%"}}>
          Self-improvement. Ugh.
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
      </div>
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-white p-6 rounded-lg shadow-md"
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "18px" }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-semibold mb-2">Motivation</h3>
          <p className="text-gray-700">
            Cultivate a positive mindset and stay motivated to achieve your goals.
            Embrace challenges as opportunities for growth.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-white p-6 rounded-lg shadow-md"
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "18px" }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-semibold mb-2">Habits</h3>
          <p className="text-gray-700">
            Develop positive habits that align with your goals. Consistency in small actions can lead to big results over time.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-white p-6 rounded-lg shadow-md"
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "18px" }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-semibold mb-2">Mindfulness</h3>
          <p className="text-gray-700">
            Practice mindfulness to stay present and reduce stress. Connect with your thoughts and emotions without judgment.
          </p>
        </VerticalTimelineElement>

        {/* Dummy Timeline Elements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-white p-6 rounded-lg shadow-md"
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "18px" }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-semibold mb-2">New Skill</h3>
          <p className="text-gray-700">
            Learn a new skill that interests you. Continuous learning keeps your mind sharp and opens new opportunities.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-white p-6 rounded-lg shadow-md"
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "18px" }}
          icon={<WorkIcon />}
        >
          <h3 className="text-xl font-semibold mb-2">Reflection</h3>
          <p className="text-gray-700">
            Take time to reflect on your progress. Celebrate achievements and identify areas for further improvement.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
