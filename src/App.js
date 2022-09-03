import React, {useState} from "react";
import MainButton from "./component/UI/buttons/MainButton";
import BlackButton from "./component/UI/buttons/BlackButton";

function App() {

    const [likes, setLikes] = useState(0)

    function incerment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div className="wrapper">
            <MainButton onClick={incerment}>
                +
            </MainButton>
            <h1 style={{fontSize: 40  }}>{likes}</h1>
            <BlackButton onClick={decrement}>
                -
            </BlackButton>
        </div>
    );
}

export default App;
