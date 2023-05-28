import { useParams } from 'react-router-dom';
import "../css/apartman.css"

export const Apartman = () => {
    const { id } = useParams();

    return (
        <div>
            <p>ID iz URL-a: {id}</p>
        </div>
    )
}