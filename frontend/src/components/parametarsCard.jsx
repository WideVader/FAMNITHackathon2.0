import "../css/parameterCard.css"

export const ParameterCard = ({data:{Icon, text}}) => {
    // console.log(data)

    return (
        <div className="amenities">
            <div className="line">
            <Icon/>
            <p>{text}</p>
            </div>
        </div>
    )
}