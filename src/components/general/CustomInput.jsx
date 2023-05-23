export default function CustomInput({ field }) {
  return (
    <div className="form_input-container--add-user">
      <input
        id="surname2"
        className="form_input--add-user"
        type="text"
        placeholder=" "
        name="surname2"
        onChange={handleChange}
      />
      <div className="form_cut"></div>
      <label htmlFor="surname2" className="form_placeholder--add-user">
        Segundo apellido
      </label>
    </div>
  );
}
