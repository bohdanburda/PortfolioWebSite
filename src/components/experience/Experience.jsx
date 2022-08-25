import React from 'react'
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";


const Experience = () => {
  return (
    <section id='experience'>
    <h2 className='text-light'>Experience</h2>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2022 - present"
        iconStyle={{ background: 'rgb(255, 178, 0)', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title card">Medical Project</h3>
        <h4 className="vertical-timeline-element-subtitle card">.Net developer at SoftServe</h4>
        <p className='card'>
        <b>Technologies:</b> .NET Core/Framework/Standard2.0, EF, SQLite, PostgreSQL
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 2021 - Feb 2022"
        iconStyle={{ background: 'rgb(255, 178, 0)', color: '#fff' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title card">EPlast</h3>
        <h4 className="vertical-timeline-element-subtitle card">.Net developer at SoftServe Academy</h4>
        <p className='card'>
        <b>Technologies:</b> .NET Core, EF, MS SQL, React, Typescript, HTML, CSS
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2021 - Dec 2021"
        iconStyle={{ background: 'rgb(255, 178, 0)', color: '#fff' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title card">Sports Hub</h3>
        <h4 className="vertical-timeline-element-subtitle card">.Net developer at SoftServe Academy</h4>
        <p className='card'>
        <b>Technologies:</b> .NET 5, ASP.NET Core (MVC), Razor Pages, Entity Framework, MySQL
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2021 - May 2021"
        iconStyle={{ background: 'rgb(255, 178, 0)', color: '#fff' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title card">Expandas</h3>
        <h4 className="vertical-timeline-element-subtitle card">Python developer at University Project</h4>
        <p className='card'>
        <b>Technologies:</b> Python 3, Django, PostgreSQL, Docker, Telegram Bot API, JWT Tokens
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </section>
  )
}

export default Experience