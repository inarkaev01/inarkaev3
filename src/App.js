import Header from './Header';
import Footer from "./Footer";
import React, {useState} from "react";

 function App (){
    let [more, setMore] = useState(0);

    function moree(){
        setMore(more + 3)
    }
    function less(){
        if(more != 0){
            setMore(more - 2)
        }
    }
    function trash(){
        setMore(more = 0)
    }
    return <div className="wrap">
        <Header/>

        <div className="number">{more}
            <div className="buttons">
                <a href="#"><div onClick={moree} className="b_one"> Увеличить</div></a>
                <a href="#"><div onClick={less} className="b_two">Уменьшить</div></a>
                <a href="#"><div onClick={trash} className="b_three">Сбросить</div></a>
            </div>
        </div>
        <Footer/>

    </div>

}

export default App;