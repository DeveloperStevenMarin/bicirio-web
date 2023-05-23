

export function Form({ action, fields, handleChange }) {
  return (
    <section className="section user-section">
      <div className="form form--add-user">
        <div className="form_input-container--add-user">
          <input
            id="id"
            className="form_input--add-user"
            type="number"
            autoComplete="email"
            pattern="/^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/gm"
            placeholder=" "
            name="id"
            onChange={handleChange}
          />
          <div className="form_cut"></div>
          <label htmlFor="id" className="form_placeholder--add-user">
            Cédula
          </label>
        </div>
        <div className="form_input-container--add-user">
          <input
            id="password"
            className="form_input--add-user"
            type="password"
            placeholder=" "
            name="password"
            onChange={handleChange}
          />
          <div className="form_cut"></div>
          <label htmlFor="password" className="form_placeholder--add-user">
            Contraseña
          </label>
        </div>
        <div className="form_input-container--add-user">
          <input
            id="name1"
            className="form_input--add-user"
            type="text"
            placeholder=" "
            autoComplete="new-password"
            name="name1"
            onChange={handleChange}
          />
          <div className="form_cut"></div>
          <label htmlFor="name1" className="form_placeholder--add-user">
            Primer nombre
          </label>
        </div>
        <div className="form_input-container--add-user">
          <input
            id="name2"
            className="form_input--add-user"
            type="text"
            placeholder=" "
            name="name2"
            onChange={handleChange}
          />
          <div className="form_cut"></div>
          <label htmlFor="name2" className="form_placeholder--add-user">
            Segundo nombre
          </label>
        </div>
        <div className="form_input-container--add-user">
          <input
            id="surname1"
            className="form_input--add-user"
            type="text"
            placeholder=" "
            name="surname1"
            onChange={handleChange}
          />
          <div className="form_cut"></div>
          <label htmlFor="surname1" className="form_placeholder--add-user">
            Primer apellido
          </label>
        </div>
       
        <button type="text" className="btn_form-submit--user" onClick={action}>
          Crear usuario
        </button>
      </div>
    </section>
  );
}
