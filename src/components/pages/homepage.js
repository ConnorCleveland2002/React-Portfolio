import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="topimage">
        <img alt="Top Gif" src="top.gif" width="100%" height="75%" />
      </div>
      <div className="homepageBody">
        <article>
          <div id="aboutme" className="aboutme">
            <hr />
            <h1>About Me</h1>
            <img
              alt="Pic of me"
              src="me.jpeg"
              className="rounded mx-auto d-block"
            />
            <br />
            <p>
              Hello! My name is Connor Cleveland, and I am a beginner Full Stack
              Web Developer, and an aspiring web application designer and video
              game coder. I have had this passion for nearly a decade, and
              started my education in 2016 at Cheshire High School.
            </p>
            <hr />
            <h2>Education</h2>
            <p>
              Currently, I am being educated at the University of Connecticut's
              Coding Boot Camp. I've also been educated in several code and
              application design classes at Cheshire High School, including Web
              and App Design, and Game Design and Development.
            </p>
            <hr />
            <h2>Skills</h2>
            <p>
              As you could see on the page <a href="/work">work</a>, I am able
              to work functionally on a team of developers. I am also very
              skilled at working solo on projects, as seen by the Weather
              Dashboard and the Note Taker. I also have experience in;
            </p>
            <ul>
              <li>Hypertext Markup Language (HTML)</li>
              <li>Javascript (JS)</li>
              <li>Cascading Stylesheets (CSS)</li>
              <li>Application Programming Interface (API)</li>
            </ul>
            <hr />
            <h2>Passions</h2>
            <p>
              I've always had a passion for the entire process of game
              development, which then, in turn, lead to my interest in coding
              web aplications. I find it to be a continuously useful skill to
              have, and I also love how it constantly changes, as that adds a
              sense of it never getting old, which I appreciate.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
