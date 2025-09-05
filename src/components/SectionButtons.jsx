import {differences} from './infoWay.js'
import Button from './Button.jsx'
import { useState } from 'react';


export default function SectionButtons(){
    const [content, setContent] = useState('way'); // или 'easy', 'program' - что есть в differences
    function handClick(type){
    setContent(type)
  }
    return(
        <section>
          <h3>Buttons</h3>
          <Button onClick={() => handClick('way')}>Way</Button>
          <Button onClick={() => handClick('easy')}>Easy</Button>
          <Button onClick={() => handClick('program')}>Program</Button>
        
        {/* Проверяем, существует ли ключ в differences */}
        <p>{differences[content] || 'Content not found'}</p>
        </section>
    );
    
}