
const InputDataForm = (props) => {

    const submitFormHandler = (event) => {
        event.preventDefault()
        props.onFormSubmit({
            'title':'Masala Kulcha',
            'Type' : 'Kulcha',
            'Is_Veg' : true,
            'Price' : 45.00
        })
    }
    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Type</label>
                <input type='text'/>
            </div>
            <div>
                <label>Price</label>
                <input type='number'/>
            </div>
            <button type="submit">Add Food</button>
        </form>
    )
}
export default InputDataForm