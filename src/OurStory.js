import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
//CSS
import './styles/OurStory.css'

export const OurStory = () =>(
    <div className='OurStory'>
        <h1 className='OurStory-title'>Our Story</h1>
        <div className='OurStory-subtitle'>
            <p>Hiral and Rina have known each other since they were kids, but fell out of touch as they grew older and went in separate directions.
            </p>
            <p>Here is the story of how their separate paths become one...</p>
        </div>
        <div className='OurStory-timeline'>
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="Summer 2013"
                dateInnerStyle={{ background: '#f6dcd7', color: '#000' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/Summer-2013-1.JPG")} alt="" title="" /></div>
                <p>
                One summer...while living in Chicago and studying at DePaul University; Rina reintroduced the city to Hiral, who was in Chicago for a summer internship while attending the University of Michigan in Ann Arbor, MI.
                </p>
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/Summer-2013-2.JPG")} alt="" title="" /></div>

            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="2013 - 2014"
                dateInnerStyle={{ background: '#f6dcd7', color: '#000' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/2013-2014-1.JPG")} alt="" title="" /></div>
                <p>
                In the fall, Hiral returned to Michigan to finish school, but stayed in touch with Rina through late-night FaceTime calls, thoughtful gestures and visits along the way. During this time, Hiral returned the favor by showing Rina the charm of Ann Arbor. After graduating, Hiral moved to Chicago in the spring.
                </p>
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/2013-2014-2.JPG")} alt="" title="" /></div>

            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="Fall 2016"
                dateInnerStyle={{ background: '#f6dcd7', color: '#000' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/fall-2016-1.jpg")} alt="" title="" /></div>
                <p>
                After two amazing years together in Chicago, Rina started a new job there, and a new job opportunity took Hiral to New York City. Though changes were on the horizon, Hiral knew Rina was the one. And so, on a beautiful October afternoon in Ann Arbor - the city where Hiral and Rina fell in love - Hiral popped "the question" and Rina said YES!
                </p>    <div className='OurStory-img'><img height="300" src={require("./media/ourstory/fall-2016-2.jpg")} alt="" title="" /></div>
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText="January 2019"
                dateInnerStyle={{ background: '#f6dcd7', color: '#000' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <p>
                In early 2019, Rina moved to New York, and now Hiral and Rina get to explore a new city together. While they have been enjoying the Big Apple, they are even more enthused to be planning their upcoming wedding!
                </p>
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/us.jpeg")} alt="" title="" /></div>
            </TimelineItem>
        </Timeline>
        </div>
    </div>
);