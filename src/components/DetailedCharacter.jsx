import { Link } from "react-router-dom"

export const DetailedCharacterInfo = (props) => {
    return (
        <div className=" bg-white bg-opacity-75 mt-4 me-4 d-flex rounded" style={{ maxWidth: "50%", width: "auto" }}>
            <div>
                <img src={props.img} alt="" style={{ maxWidth: "850px", maxHeight: "450px" }} />
                <div className="d-flex">
                    <span className="mx-4">
                        <h4 className="text-center">Name</h4>
                        <p className="text-center fs-5">{props.name}</p>
                    </span>
                    <span className="mx-2">
                        <h4 className="text-center">Age</h4>
                        <p className="text-center fs-5">{props.age}</p>
                    </span>
                    <span className="mx-2">
                        <h4 className="text-center">Gender</h4>
                        <p className="text-center fs-5">{props.gender}</p>
                    </span>
                </div>
            </div>
            <div className="pe-4">
                <h4 className="my-2">Description</h4>
                <p className="fs-5">{props.description}</p>
                <h4 className="my-2">Quote</h4>
                <p className="fs-5">{props.quote}</p>
                <h4 className="my-2">{props.race === "Human" ? "Breathing styles" : "Blood technique"}</h4>
                {props.styles.map((element, index) => (
                    <Link to={`/detailedstyle/${element.id}`}>
                        <p className="fs-5" key={index}>{element.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}