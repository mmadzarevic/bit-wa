const ShoppingListItem = props => {
    return (
        <li>{props.name}</li>
    );
}

const ShoppingList = props => {
    return (
        <ul>
            {props.items.map((item, i) => <ShoppingListItem name = {item} key ={i}/>)}
        </ul>
    );
}

const App = (props) => {
    return (
        <div>
            <h1>This is ShoppingList!</h1>
            <ShoppingList items={['apples', 'oranges', 'bananas', 'kiwi', 'cherry']}/>
        </div>
    );
}



const rootElement = document.getElementById("root");

ReactDOM.render(<App title="ShoppingList"/>, rootElement);