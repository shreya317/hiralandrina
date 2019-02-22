import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
//CSS
import './styles/OurStory.css'

export const OurStory = () =>(
    <div className='OurStory'>
        <h1 className='OurStory-title'>Our Story</h1>
        <div className='OurStory-subtitle'>
            <p>Hiral and Rina had known each other since they were kids, but had fallen out of touch as they grew older
                and went in separate directions.
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
                <div className='OurStory-img'><img height="350" src={require("./media/ourstory/Summer-2013-1.JPG")} alt="Summer-2013-1" title="Summer-2013-1" /></div>
                <p>
                    Rina and Hiral reconnected after years of being out of touch and hit it off right away! Rina, having lived
                    in Chicago as an undergraduate student at DePaul (GO BLUE DEMONS!), re-introduced Chicago to Hiral
                    who moved to Ann Arbor, MI (GO BLUE!) after high school.
                </p>
                <div className='OurStory-img'><img height="350" src={require("./media/ourstory/Summer-2013-2.JPG")} alt="Summer-2013-2" title="Summer-2013-2" /></div>

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
                <div className='OurStory-img'><img height="350" src={require("./media/ourstory/2013-2014-1.JPG")} alt="2013-2014-1" title="2013-2014-1" /></div>
                <p>
                    Hiral returned to Michigan to finish school and stayed in touch with Rina through late night FaceTime
                    calls, SWEET gestures and visits along the way. Hiral was super excited to return the favor to Rina by
                    showing her the charm of Ann Arbor.
                </p>
                <div className='OurStory-img'><img height="350" src={require("./media/ourstory/2013-2014-2.JPG")} alt="2013-2014-2" title="2013-2014-2" /></div>

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
                <div className='OurStory-img'><img height="300" src={require("./media/ourstory/fall-2016-1.jpg")} alt="fall-2016-1" title="fall-2016-1" /></div>
                <p>
                    After two amazing years together in Chicago, Rina started a new job in the city and life took Hiral to New
                    York for a new job opportunity. While changes were on the horizon, Hiral knew he wanted the
                    relationship with Rina to be forever. On October 15th, Hiral popped the question in Ann Arbor, where
                    they fell in love. Rina said YES!
                </p>    <div className='OurStory-img'><img height="350" src={require("./media/ourstory/fall-2016-2.jpg")} alt="fall-2016-2" title="fall-2016-2" /></div>
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
                    Rina moved to New York, ending their two years of long distance. While they are enjoying the new city,
                    as a couple, they are even more enthused by planning their upcoming wedding! We can’t wait to see
                    you all in July!
                </p>
            </TimelineItem>
        </Timeline>
        </div>
    </div>
);