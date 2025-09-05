import { useState } from "react";
import Button from "./Button";

export default function FeedbackSection(){
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
   
    return(
        <section>
            <h1>Обратная связь</h1>
            <form action="">
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Ваше имя"
                />
            </form>
            
            <select 
                name="reason" 
                id="reason" 
                value={reason} 
                onChange={(event) => setReason(event.target.value)}
            >
                <option value="disabled" >Выберите причину</option>
                <option value="error">Ошибка</option>
                <option value="help">Помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            
            <pre>
                name: {name || "не указано"}
                <br />
                reason: {reason || "не выбрано"}
            </pre>
            
            <br/><br/>
            <Button>Отправить</Button>
        </section>
    );
}