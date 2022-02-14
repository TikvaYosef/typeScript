import { useReducer } from "react"
import { StudentAction } from "../../Actions/StudentAction";
import { StudentReducer } from "../../Reducers/StudentReducer";




export const Student = () => {

    const [student, dispatch] = useReducer(StudentReducer, []);

    return (
        <div>
            <button onClick={() => dispatch(StudentAction())}>click</button>
            <h1>
                {
                    student.map((item) =>
                        <div>
                            <p>{item.fname}</p>
                            <p>{item.lname}</p>
                            <p>{item.age}</p>

                        </div>
                    )



                }
            </h1>
        </div>
    )

}