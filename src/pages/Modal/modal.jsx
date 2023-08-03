import React, { useState, useContext } from "react";
import Model from "react-modal";
import "./edit.css";
// import { useNavigate } from "react-router-dom";
import { ProfileContext, useLocalStorage } from "../../context/ProfileContext";

export default function Modal({ visible, setVisible }) {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate();
  const { value, setValue } = useLocalStorage("values", []);
  const [editUser, setEditUser] = useState({
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    image: value.image,
  });
  //   onSubmit: (values) => {
  //     localStorage.setItem("values", JSON.stringify(values));
  //     navigate(`/profile`);
  //   },
  // });

  // function closeModal() {
  //   visible(false);
  // }

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convert2base64(file);
    console.log(base64);

    setValue(() => ({ image: base64 }));
  };

  const { handleOpen } = useContext(ProfileContext)

  const handleClick = () => {
    localStorage.setItem("values", JSON.stringify(editUser));
  };

  return (
    <div>
        {/* {visible && <Modal />} */}
      <Model
        className="con1"
        isOpen={true}
        onRequestClose={() => setVisible(false)}
      >
        <div>
          <h2>Edit Information Below</h2>
          <div className="displays">
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              name=""
              id=""
              defaultValue={value.firstName}
              onChange={(e) => {
                setEditUser((prev) => ({ ...prev, firstName: e.target.value }));
              }}
            />
          </div>
          <div className="displays">
            <label htmlFor="">LastName</label>
            <input
              type="text"
              name="fisrtName"
              defaultValue={value.lastName}
              onChange={(e) => {
                setEditUser((prev) => ({ ...prev, lastName: e.target.value }));
              }}
            />
          </div>
          <div className="displays">
            <label htmlFor="">Email</label>
            <input
              type="text"
              defaultValue={value.email}
              onChange={(e) => {
                setEditUser((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>
          <div className="displays">
            <label htmlFor="">Image</label>
            <input
              type="file"
              defaultValue={value.image}
              onChange={(e) => uploadImage(e)}
            />
          </div>
          <div className="displays">
            <button id="btns" onClick={() => {
              handleClick();
              handleOpen();
            }}>Update</button>
          </div>
        </div>
      </Model>
    </div>
  );
}

// export default function Edit() {
//   const { value, setValue } = useLocalStorage("values", []);
//   const formik = "";
//   //   const formik = useFormik({
//   //     initialValues: {
//   //       firstName: "",
//   //       lastName: "",
//   //       email: "",
//   //     },
//   //     onSubmit: (values) => {
//   //       alert(JSON.stringify(values, null, 2));
//   //       localStorage.setItem("values", JSON.stringify(values));
//   //     },
//   //   });
//   // function newData(e, values) {
//   //   console.log(values, 1);
//   // }

//   return (
//     <div className="display">
//       <Formik
//         initialValues={{ email: "", firstName: "", lastName: "" }}
//         onSubmit={(values) => {
//           alert(JSON.stringify(values, null, 2));
//           localStorage.setItem("values", JSON.stringify(values));
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form onSubmit={setValue(values)}>
//             <h1>Edit Information</h1>
//             <div className="display1">
//               <label>First Name</label>
//               <input
//                 type="firstName"
//                 name="firstName"
//                 onChange={handleChange}
//                 value={value.firstName}
//               />
//             </div>
//             <div className="display1">
//               <label>Last Name</label>
//               <input
//                 type="lastName"
//                 name="lastName"
//                 onChange={handleChange}
//                 value={value.lastName}
//               />
//             </div>
//             <div className="display1">
//               <label>email</label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 value={value.email}
//               />
//             </div>

//               <button className="btn" type="submit" >
//                 Update
//               </button>

//           </form>
//         )}
//       </Formik>
//       {/* <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           onChange={() => formik.handleChange}
//           value={data.firstName || ""}
//         />

//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           onChange={formik.handleChange}
//           value={data.lastName}
//         />

//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={data.email}
//         />

//         <button type="submit">Submit</button>
//       </form> */}
//     </div>
//   );
// }
// export default function Edit () {
//   const { values, setValues} = useLocalStorage("values", []);
// const InlineEdit = ({ value, setValue }) => {
//   const [editingValue, setEditingValue] = useState(value);

//   const onChange = (event) => setEditingValue(event.target.value);

//   const onKeyDown = (event) => {
//     if (event.key === "Enter" || event.key === "Escape") {
//       event.target.blur();
//     }
//   }

//   const onBlur = (event) => {
//     if (event.target.value.trim() === "") {
//       setEditingValue(value);
//     } else {
//       setValue(event.target.value)
//     }
//   }

//   return (
//     <input
//       type="text"
//       aria-label="Field name"
//       value={editingValue}
//       onChange={onChange}
//       onKeyDown={onKeyDown}
//       onBlur={onBlur}
//     />
//   );
// };

//   const [value, setValue] = useState();

//   return <InlineEdit value={values.fisrtName} setValue={setValue} />;
// };
