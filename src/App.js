import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Field } from "react-final-form";
import TextField from './components/TextBox.js';



const onSubmit = values => {
  document.getElementById("texthere").innerHTML='';
  console.log(values);
  document.getElementById("texthere").innerHTML+= `<h1>Topic: ${values.topic} </h1> <p>StringStuff: ${values.sampleField} </p><p>by ${values.firstName} ${values.lastName} </p> <p>I have a  ${values.itemName}.${values.itemDescription}</p>`

};

const required = value => (value ? undefined : "Required");
const isString = value => ( 
  typeof value === 'string'? undefined : 'Needs text'
);


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "Sad times"
  //   };
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.inputRef = React.createRef();
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }
 validate = values =>{
   console.log(values)
 }
  render() {
    return (
      <div className="App">
        <Form
          onSubmit={onSubmit}
           validate={this.validate}

          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              {/* <Field
              validate={required}
                render={({ input, meta }) => (
                  <div> */}
                    {/* <label>Bio</label>
                    <textarea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>} */}

                    {/* <label htmlFor="controlled">
                      Controlled Input:
                      <input
                        name="controlled"
                        type="text"
                        value={this.state.value}
                        onChange={event => this.handleChange(event)}
                      />
                    </label> */}
                    {/* <div>
                     
                      <Field
                        name="topic"
                        validate={required}
                        render={({ input, meta }) => (
                          <div>
                             <label>Topic Title</label>
                            <input {...input}
                            placeholder="title..." />
                            {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                          </div>
                          // {meta.touched && meta.error && <span>{meta.error}</span>}
                        )}
                      />
                    </div> */}
                    {/* <div>
                      <Field
                        name="sampleField"
                        component="input"
                         >
                        {({input, meta})=>(
                          <div>
                            <label>Write something</label>
                          <input
                            {...input}
                            type="text"
                            placeholder="Text here"
                          />
                          {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                      </Field>
                    </div> */}

                    {/* <Field name="lastName" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>Last Name</label>
                          <input
                            {...input}
                            type="text"
                            placeholder="Last Name"
                          />
                          {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field> */}

                     {/* <Field name="firstName" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>First Name</label>
                          <input
                            {...input}
                            type="text"
                            placeholder="First Name"
                          />
                          {meta.error &&
                            meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field> */}


                     <div>
            {/* <label>Email</label> */}
            <Field
              name="itemName"
              component={TextField}
              type="text"
              label="Name Your Item"
              validate={required}
            />
          </div>

                     <div>
            {/* <label>Email</label> */}
            <Field
              name="itemDescription"
              component={TextField}
              type="text"
              multiline
              rows="4"
              label="Describe Your Item"
              validate={isString}
            />
          </div>

          
                    <button type="submit">Submit Pls</button>
                  {/* </div>
                )}
              /> */}
            </form>
          )}
        />
        <div id='texthere'></div>
      </div>
    );
  }
}

export default App;
