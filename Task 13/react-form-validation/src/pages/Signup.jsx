import { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "", terms: false });
    const [formErrors, setFormErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);  // State for password visibility

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.username.trim()) errors.username = "Username is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.password.trim()) errors.password = "Password is required";
        if (!formData.terms) errors.terms = "You must agree to the terms";

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log(formData);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full p-6 md:p-0 md:w-1/2 lg:w-1/4 mx-auto space-y-3 h-screen">
                <div className="w-full mb-6">
                    <h2 className="font-bold text-4xl mb-1">Sign up</h2>
                    <p className="text-[#818181]">Create your account in seconds.</p>
                </div>

                {/* Username Field */}
                <div className="username flex flex-col w-full mb-4">
                    <div className="flex justify-between">
                        <label className="text-[#818181]" htmlFor="username">Username</label>
                        {formErrors.username && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
                        )}
                    </div>
                    <input
                        className={`px-3 py-2 border rounded-lg transition-all focus:outline-[#7754f6] ${formErrors.username ? 'border-red-500' : 'border-[#ced4da]'}`}
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleFormChange}
                        placeholder="Your username"
                    />
                </div>

                {/* Email Field */}
                <div className="email flex flex-col w-full mb-4">
                    <div className="flex justify-between">
                        <label className="text-[#818181]" htmlFor="email">Email</label>
                        {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                    </div>
                    <input
                        className={`px-3 py-2 border rounded-lg transition-all focus:outline-[#7754f6] ${formErrors.email ? 'border-red-500' : 'border-[#ced4da]'}`}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Your email"
                    />
                </div>

                {/* Password Field */}
                <div className="password flex flex-col w-full mb-4">
                    <div className="flex justify-between">
                        <label className="text-[#818181]" htmlFor="password">Password</label>
                        {formErrors.password && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            className={`w-full px-3 py-2 border rounded-lg transition-all focus:outline-[#7754f6] ${formErrors.password ? 'border-red-500' : 'border-[#ced4da]'}`}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            placeholder="Your password"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/3 text-[#818181] text-sm"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                    </div>
                </div>

                {/* Terms Checkbox */}
                <div className="terms flex items-center w-full space-x-1 mb-5">
                    <input
                        className={`w-3 h-3 accent-[#7754f6] ${formErrors.terms ? 'border-red-500' : 'border-[#ced4da]'}`}
                        type="checkbox"
                        name="terms"
                        value={formData.terms}
                        onChange={handleFormChange}
                    />
                    <label className="text-[#818181]" htmlFor="">I agree to the Terms of Service and Privacy Policy</label>
                </div>
                {formErrors.terms && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.terms}</p>
                )}

                {/* Submit Button */}
                <div className="flex flex-col items-start w-full space-x-1 mb-3">
                    <button
                        disabled={!formData.terms}
                        onClick={handleFormSubmit}
                        className={`px-6 py-2 mb-3 w-full rounded-lg font-bold transition-all 
                            ${formData.terms ? 'bg-[#7754f6] text-white hover:bg-[#643cf5] hover:cursor-pointer' : 'bg-gray-300 text-gray-500  cursor-not-allowed'}`}>
                        Create an account
                    </button>
                    <p className="text-[#818181]">Already a member? <a href="/login" className="font-bold text-[#7754f6] hover:text-[#643cf5] hover:underline transition-all hover:cursor-pointer">Log in</a></p>
                </div>
            </div>
        </>
    );
};

export default Signup;
