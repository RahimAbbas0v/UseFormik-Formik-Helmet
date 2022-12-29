import { Formik, Form, Field } from "formik";
import "./App.css";
import React, { useState } from "react";
export const Todos = () => {
  const [todos, setTodos] = useState([]);
  function data(values){
    setTodos([...todos,values])
  }
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          mail: "",
          number: "",
          about: "",
        }}
        onSubmit={(values) => {
          data(values)
        }}
      >
        {({ values }) => (
          <Form>
            <Field id="field" name="name" placeholder=" Your Name" />
            <br />
            <Field id="field" name="lastname" placeholder="Your LastName" />
            <br />
            <Field
              id="field"
              name="mail"
              type="email"
              placeholder="Email Address"
            />
            <br />
            <Field
              id="field"
              name="number"
              type="number"
              placeholder="Phone Number"
            />
            <br />
            <Field
              id="field"
              name="about"
              component="textarea"
              placeholder="About"
              cols={20}
              rows={4}
            />
            <br />
            <button type="Submit">Add</button>
          </Form>
        )}
      </Formik>
      <ul>
        {
            todos.map((element)=>(
                <>
                <li>{element.name} {element.lastname} {element.mail}{element.number}{element.about}</li>
                </>
            ))
        }
      </ul>
    </>
  );
};