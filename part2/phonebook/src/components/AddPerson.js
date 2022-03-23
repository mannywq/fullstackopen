const AddPerson = ({onChange, onSubmit}) => {

    return (
    <form onSubmit={onSubmit}>
        <div>
          name: <input name="user" defaultValue='' onChange={onChange} /><br/>
          phone: <input name="phone" defaultValue='' onChange={onChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}

export default AddPerson