

const EnumeratorSelector = (props) => {

  const { options, selectOneMsg, label, id } = props;

  return <div>
    <label htmlFor={id}>{label}</label>
    <select
      {...props}
    >
      <option>{selectOneMsg}</option>
      {
        Object.keys(options).map(key =>
          <option
            value={key}
            key={key}
          >
            {options[key]}
          </option>
        )
      }
    </select>
  </div>;
}

export default EnumeratorSelector;