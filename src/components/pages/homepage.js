import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="topimage">
        <img
          alt="Top Gif"
          src="top.gif"
          width="100%"
          height="75%"
        />
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
              Hello! My name is Connor Cleveland, and I am a certified Full
              Stack Web Developer and graduate of Uconn Coding. I have a
              resolute drive for fast-paced problem solving and experience in
              created reswponsive web applications. I graduated from a 24-week
              intensive educational certificate program, and am passionate about
              pursuing a career in full stack web development.
            </p>
            <hr />
            <h2>Education</h2>
            <p>
              I am a certified full stack web developer, and graduate of the
              University of Connecticut's Coding Boot Camp. I started my
              education in code and application design classes at Cheshire High
              School, including Web and App Design, and Game Design and
              Development.
            </p>
            <hr />
            <h2>Skills</h2>
            <p>
              As you could see on the page <a href="/work">work</a>, I am able
              to work functionally on a team of developers. I am also very
              skilled at working solo on projects, as the sole author and
              project director. I also have experience in;
            </p>
            <ul>
              <li>Hypertext Markup Language (HTML5)</li>
              <li>Javascript (JS)</li>
              <li>Cascading Stylesheets (CSS3)</li>
              <li>Application Programming Interface (API)</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>REST APIs</li>
              <li>Handlebars.js</li>
              <li>Moment.js</li>
              <li>Materialize</li>
              <li>Github</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Apollo GraphQL</li>
            </ul>
            {/* <hr /> */}
            {/* <h2>Passions</h2>
            <p>
              I've always had a passion for the entire process of game
              development, which then, in turn, lead to my interest in coding
              web aplications. I find it to be a continuously useful skill to
              have, and I also love how it constantly changes, as that adds a
              sense of it never getting old, which I appreciate.
            </p> */}
          </div>
        </article>
      </div>
    </div>
  );
}
