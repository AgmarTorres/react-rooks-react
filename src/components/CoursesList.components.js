import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function addCourseAction(title, qty){   
    console.log(qty)
    return { type: 'ADD_COURSE', title: title, qty: qty}
}

export default function CourseList(){
    const qty = useSelector(state => state.qty)
    console.log(qty)
    const courses =  useSelector(state => state.data.slice(0, qty), [ qty])
    const dispatch = useDispatch();
   
    function addCourse(){
        dispatch(addCourseAction('graphql', qty +1))
    }

   
    /*
    function addCourse(){
        dispatch({type: 'ADD_COURSE', title: 'GraphQL'})

    }
         <button type= 'button' onClick= {addCourse }>
                Adicionar Curso
            </button>
       
    */

    return(
        <>
            <ul>
                { courses.map((course,index) => <li key={index}>{course} </li>)}
            </ul>
            <button type= 'button' onClick= {addCourse}>
                Adicionar Curso
            </button>
        </>
    )
}