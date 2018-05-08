import React, { Component } from "react";
//reduxForm is very similar to connect from react-redux
//allows our component to communicate directly to the store
import { Field, reduxForm } from "redux-form";

//component property takes in a function/component that will be used to display the Field component
//Field Component only knows how to communicate with ReduxForm, not how to show it onscreen, thats why we specify in the component attr
//we only provide a reference to the function (not invoked) bc the field will call that function when it needs to
class PostsNew extends Component {
  //field param needs to be wired up to the proper component in render
  // {...field.input} is an object that contains event handlers and props (onChange/onBlur/onFocus).  We are spreading them into the input instead of listing them out separately e.g. onChange={field.input.onChange}
  // the labels we pass as props to the Field component will be attached to the field object
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Post Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

// by default we pass in values (values from the form)
//   console.log(values) = {title: "dfada", categories: "dfdfd", content: "asssfd"}
function validate(values){
  //always start by creating an errors obj
  const errors={};
  //do your checks
  if(!values.title || values.title.length < 5){
    errors.title="Please enter a title at least 5 characters long."
  }
  if(!values.categories){
    errors.categories="Please enter some categories."
  }
  if(!values.content){
    errors.content="Please enter some content for your post."
  }

  //if errors is empty, the form is fine to submit.  Any properties means that it failed validation and redux-form assumes form is invalid
  return errors;
}

//similar connect(mapStateToProps, mapDispatchToProps), reduxForm we pass a function with configuration options...form options in this case
// ***reduxForm is a helper that allows redux-form communicate directly from the component to the reducer setup in reducers/index.js
//can show multiple forms - Sign-In and Sign-Up
//providing a unique string ensures that we can handle forms that appear in this component..keeping the form state separate
export default reduxForm({
  validate: validate,
  form: "PostsNewForm"
})(PostsNew);