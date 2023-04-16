import './Checkbox.css'

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {() => label}
    </label>
  )
}

export { Checkbox }