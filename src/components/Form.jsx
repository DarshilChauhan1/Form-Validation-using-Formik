import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validateScehma from '../schemas/ValidationSchema';

function Form() {
    const onSubmit = async (actions) => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 2000));
        await toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Logging in',
                success: 'Login Successfully',
                error: 'Login Failed'
            }
        )
        actions.resetForm();
    }

        
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            username: "",
            email: "",
            number: "",
            password: "",
            confirmpassword: ""
        },
        validationSchema: validateScehma,
        onSubmit: onSubmit
    })
    return (
        <div className="w-1/3 h-min bg-white rounded-lg shadow-lg">
            <h1 className="py-5 text-center text-xl font-bold text-blue-700 font-serif">REGISTRATION FORM</h1>
            <form className="flex flex-col px-8 py-3 justify-center items-center gap-y-2" onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input type="text" id="username" className={`border-b border-gray-400 py-2 mb-2 focus:outline-none focus:border-blue-500 w-4/5 transition duration-500 ${errors.username && touched.username ? "border-red-500" : ""}`}
                    placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleBlur} autoComplete='off'></input>
                {errors.username && touched.username && <p className='text-red-600 text-xs'>{errors.username}</p>}

                <label htmlFor="email" ></label>
                <input type="email" id="email" className={`border-b border-gray-400 py-2 mb-2 focus:outline-none focus:border-blue-500 w-4/5 transition duration-500 ${errors.username && touched.email ? "border-red-500" : ""}`} placeholder="Email Address" value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete='off'></input>
                {errors.email && touched.email && <p className='text-red-600 text-xs'>{errors.email}</p>}

                <label htmlFor="number"></label>
                <input type="number" id="number" className={`border-b border-gray-400 py-2 mb-2 focus:outline-none focus:border-blue-500 w-4/5 transition duration-500 ${errors.username && touched.number ? "border-red-500" : ""}`} placeholder="Phone number" value={values.number} onChange={handleChange} onBlur={handleBlur}></input>
                {errors.number && touched.number && <p className='text-red-600 text-xs'>{"Please Enter 10 Digits"}</p>}

                <label htmlFor="password" ></label>
                <input type="password" id="password" className={`border-b border-gray-400 py-2 mb-2 focus:outline-none focus:border-blue-500 w-4/5 transition duration-500 ${errors.username && touched.password ? "border-red-500" : ""}`} placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}></input>
                {errors.password && touched.password && <p className='text-red-600 text-xs'>{"Password must contains a special character and a digit"}</p>}

                <label htmlFor="confirmpassword"></label>
                <input type="password" id="confirmpassword" className={`border-b border-gray-400 py-2 mb-2 focus:outline-none focus:border-blue-500 w-4/5 transition duration-500 ${errors.username && touched.confirmpassword ? "border-red-500" : ""}`} placeholder="Confirm Password" value={values.confirmpassword} onChange={handleChange}
                    onBlur={handleBlur}></input>
                {errors.confirmpassword && touched.confirmpassword && <p className='text-red-600 text-xs'>{errors.confirmpassword}</p>}

                <button type="submit" className="w-1/3 h-11 rounded-xl bg-gradient-to-tr from-green-100 via-blue-500 to-purple-400 mt-4 mb-5 text-white font-bold disabled:opacity-50" disabled={isSubmitting}>SUBMIT</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Form;