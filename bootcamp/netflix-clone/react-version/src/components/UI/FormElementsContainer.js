import classes from "./FormElementsContainer.module.css"

function FormElementsContainer (props){
    return <div className= {classes.container}>{props.children}</div>
}

export default FormElementsContainer