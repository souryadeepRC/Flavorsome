import classes from './InputElement.module.css'

const InputElement = (props) => {

    return (
        <div className={classes.input__box}>
            {props.label ? <label htmlFor={props.id}>{props.label}</label> : ''}
            <input {...props.input} onChange={(event) => props.onItemUpdate(event.target.value)} />
        </div>
    )
}

export default InputElement