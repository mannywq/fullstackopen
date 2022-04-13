import { useState } from 'react'


const EditableField = ({name, value, id, updater}) => {

    const [editingValue, setEditingValue] = useState(value)

    const onChange = (event) => {

        setEditingValue(event.target.value)
    }

    const onKeyDown = (event) => {

        if (event.key === "Enter" || event.key === "Escape") {

            const obj = {[event.target.name] : editingValue}

            console.log(obj)

            updater(event.target.id, obj)

            event.target.blur()

            
              }

        }

    const onBlur = (event) => {

        if (event.target.value.trim() === "") {

            setEditingValue(value)
        }
        else {

            setEditingValue(event.target.value)
        }
        console.log(event.target.id)
    }

    return (
        <input type="text"
        name={name}
        value={editingValue}
        id={id}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        />
    )


}

export default EditableField