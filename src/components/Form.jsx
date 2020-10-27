import React from "react";
import "../assets/scss/Form.scss";

class Form extends React.Component {
  render() {
    return (
      <section className="form">
        <h1 className="form_title">Form</h1>
        <div className="form_container">
          <br />
          <label className="form_label-information" htmlFor="nombre">
            <b>Nombre*</b>
          </label>
          <input className="form_inputs" type="text" name="name" />
          <label className="form_label-information" htmlFor="apellido">
            <b>Apellido</b>
          </label>
          <input className="form_inputs" type="text" />
          <label className="form_label-information" htmlFor="correo">
            <b>Correo*</b>
          </label>
          <input className="form_inputs" type="text" />
          <label
            className="form_label-information"
            htmlFor="fecha_de_nacimiento"
          >
            <b>Fecha de Nacimiento*</b>
          </label>
          <input className="form_input-date" type="date" />
          <br />
          <div className="form_accept">
            <input className="form_input-checkbox" type="checkbox" />
            <label className="form_label-accept" htmlFor="accept">
              <b>Acepto términos y condiciones*</b>
            </label>
          </div>
          <p className="form_paragraph">
            Lorem ipsum dolor sit, amet adipisicing elit, sed diam
          </p>
          <input className="form_input-submit" type="submit" value="Enviar" />
        </div>
      </section>
    );
  }
}

export default Form;
