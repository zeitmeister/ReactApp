const desc = "I just learned to create a node and to render it to the DOM";
const myTitleID= 'main-title'
const name = 'Simon';

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);