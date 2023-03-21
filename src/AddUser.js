import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from 'formik';


// const AddUser = () => {
//   let history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: ""
//   });

//   const { name, username, email, phone, website } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", user);
//     history.push("/");
//   };

//   const validate = yup.object({
//     name: yup.string()
//       .min(4, "Must be 4 charecters or more")
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//     username: yup.string()
//       .min(4, "Must be 4 charecters or more")
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),
//     email: yup.string()
//       .email("Enter valid Email")
//       .required("Email is required"),
//     phone: yup.string()
//       .min(6, "Number must be at least 6 charaters")
//       .required("Number is required"),
//     website: yup.string()
//       .min(6, "Number must be at least 6 charaters")
//       .required("Number is required")
//   });
//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         username: "",
//         email: "",
//         phone: "",
//         website: ""
//       }}
//       validationSchema={validate}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {(formik) => (
//         <div className="container">
//           <div className="w-75 mx-auto shadow p-5">
//             <h2 className="text-center mb-4">Add A User</h2>
//             <form onSubmit={(e) => onSubmit(e)}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your Name"
//                   name="name"
//                   value={name}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your Username"
//                   name="username"
//                   value={username}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your E-mail Address"
//                   name="email"
//                   value={email}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your Phone Number"
//                   name="phone"
//                   value={phone}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your Website Name"
//                   name="website"
//                   value={website}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <button className="btn btn-primary btn-block">Add User</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// };
const formValidationschema = yup.object({
  email: yup
    .string()
    .min(8, "Need a Bigger Email"),

  password: yup
    .string()
    .min(8, "Need a Bigger Password")
    .required("Its A Required field")
    .max(12),
})
const AddUser = () => {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    validationSchema: formValidationschema,
    onSubmit: (values) => {
      console.log('the form are ', values)
    },
  })

  return (

    <div >
      <form className='basic-form'
        onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {touched.email && errors.email ? errors.email : null}
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {touched.password && errors.password ? errors.password : null}

        <button type='submit'> submit</button>
      </form>

    </div>
  );
}



export default AddUser;
