import styles from "./inputField.module.css";

function InputField({ type, label, placeholder, disabled }) {
  return (
    <div className={`${styles.input}`}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField;
