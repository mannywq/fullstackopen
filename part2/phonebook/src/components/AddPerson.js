const AddPerson = ({onChange, onSubmit}) => {

    return (
    <form id="addPerson" onSubmit={onSubmit}>
        <div>
          <label>Name:</label> <input name="user" defaultValue='' onChange={onChange} /><br/>
          <label>Phone:</label> <input name="phone" defaultValue='' onChange={onChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}

export default AddPerson