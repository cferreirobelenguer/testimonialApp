import React, {useState, useRef} from 'react';
import '../Home/data';
import '../Home/Home.css';
import { testimonials } from '../Home/data';

const Home = () => {
    const [index, setIndex] = useState(0);
    const boxRef = useRef(null);


    const handleAnimationIteration = () => {
        console.log(index)
        //index is incremented when the animation loop ends
        if (index < testimonials.length-1) {
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    };


    return (
        <section className='home-container'>
            <div className='home-container-description'>
                <div className="home-container-progress" ref={boxRef} onAnimationIteration={handleAnimationIteration}></div>
                <div className="fas fa-quote-right fa-quote"></div>
                <div className="fas fa-quote-left fa-quote"></div>
                <p className='home-text'>{testimonials[index].text}</p>
            </div>
            <div className='home-container-user'>
                <img src={testimonials[index].photo} className='home-img'></img>
                <div className='home-container-text'>
                    <p className='home-title'>{testimonials[index].name}</p>
                    <p className='home-subtitle'>{testimonials[index].position}</p>
                </div>
            </div>
        </section>
    )
}
export default Home;