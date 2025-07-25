import { element } from "prop-types"
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const DetailedStyleInfo = (props) => {
    const { store } = useGlobalReducer()
    return (
        <div className=" bg-white bg-opacity-75 mt-4 me-4 d-flex p-2" style={{ maxWidth: "50%", width: "auto" }}>
            <div >
                <img src={props.img} alt="" style={{ maxWidth: "850px", maxHeight: "450px" }} className="rounded" />
            </div>
            <div className="mx-3 pe-4">
                <h4 className="my-2">Name</h4>
                <p className="fs-5">{props.name}</p>
                <h4 className="my-2">Description</h4>
                <p className="fs-5">{props.description}</p>
                <h4 className="my-2">{props.race === "Human" ? "Breathing Users" : "Blood Users"}</h4>
                <div className="d-flex overflow-x-auto flex-nowrap gap-2">
                    {props.styleUsers.map((element, index) => {
                        const techUsers = store.characters.find((character) => character.name === element.name)
                        console.log(techUsers);

                        return (
                            <div key={index} className="mx-4">
                                <Link to={`/detailedcharacter/${techUsers.id}`}>
                                    <img src={techUsers.img} style={{ maxHeight: "150px" }} alt="" /> <br />
                                </Link>
                                    <p className="text-center">{techUsers.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}