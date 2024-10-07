import { useParams } from "react-router-dom";

const Show = () => {

    let {id} = useParams();

    return(
        <h1>Hello from the books / show page, you are looking at a book with an id of: {id}</h1>
    );
}

export default Show;