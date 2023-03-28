import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div> 
                <><h1>Matheus Ramos</h1>
                <p>Sou eu memo</p></>
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>DOM</li>
                    <li><a href='https://www.youtube.com/watch?v=1OA6J8aTGuo' className='Manoel-Gomes'>Você me ama?</a></li>
                </ul>
            </div>
        );
    }
}

export default About;