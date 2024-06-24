import React, { useState } from "react";
import { images } from "../assets";

const AuthTab = ({ setShowAuthTab, loginStatus }) => {
  const [loginPage, setLoginPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { isLogin, setIsLogin } = loginStatus;
  const getLogin = (e) => {
    if (e.target.value === "Sign In") {
      setIsLogin(true);
      setShowAuthTab(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(isLogin, setIsLogin);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-end sm:items-center z-20 backdrop-brightness-50">
      {isLogin ? (
        <div className="w-full sm:w-[500px] md:w-[736px] bg-white rounded-xl">
          <div
            className="cursor-pointer block "
            onClick={() => setShowAuthTab(false)}
          >
            <img src={images.black_cross_icon} alt="cross_icon" />
          </div>
          <div className="bg-[#2F6CE5] sm:w-full mt-[50px]  rounded-full  ">
            <input
              className="cursor-pointer w-full text-white text-center px-[28px] py-[12px] "
              type="submit"
              value="log out"
              onClick={() => setIsLogin(false)}
            />
          </div>
        </div>
      ) : (
        <div className="w-[550px] md:w-[750px]">
          <div
            className="cursor-pointer hidden sm:flex justify-end bg-none mb-[12px]"
            onClick={() => setShowAuthTab(false)}
          >
            <img src={images.login_close_icon} alt="close_button" />
          </div>
          <div className="w-full sm:w-[500px] md:w-[736px] bg-white rounded-xl">
            <div className="hidden sm:block text-[#008A45] text-center py-[17px] bg-[#EFFFF4] rounded-xl">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
            <div className="flex justify-center md:justify-between gap-[24px] px-[36px] pt-[24px] pb-[36px]">
              {/* left section */}
              <div className="w-full sm:w-auto">
                <div className="flex justify-between sm:block text-[24px]">
                  {loginPage ? "Sign In" : "Create Account"}
                  <div
                    className="cursor-pointer block sm:hidden"
                    onClick={() => setShowAuthTab(false)}
                  >
                    <img src={images.black_cross_icon} alt="cross_icon" />
                  </div>
                </div>
                <form
                  onSubmit={(e) => submitHandler(e)}
                  className="pt-[24px] max-w-[100vw] md:max-w-[320px] "
                >
                  {!loginPage && (
                    <div className="flex h-[46px] bg-[#F7F8FA] ">
                      <input
                        className="border-2 px-[12px] w-full md:max-w-[160px] bg-[#F7F8FA] placeholder:text-[#8A8A8A]"
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="border-2 px-[12px] w-full md:max-w-[160px] bg-[#F7F8FA] placeholder:text-[#8A8A8A]"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  )}
                  <input
                    className="border-2 px-[12px] w-full md:w-[320px] h-[46px] bg-[#F7F8FA] placeholder:text-[#8A8A8A]"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="flex items-center justify-between w-full border-2 h-[46px] px-[12px] bg-[#F7F8FA]">
                    <input
                      className="h-full bg-[#F7F8FA] placeholder:text-[#8A8A8A] grow"
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Password"
                    />
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img src={images.eye_icon} alt="eye_icon" />
                    </div>
                  </div>
                  {!loginPage && (
                    <input
                      className="w-full px-[12px] border-2 h-[46px] bg-[#F7F8FA] placeholder:text-[#8A8A8A]"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  )}
                  <div className="flex items-center justify-between mt-[19px]">
                    <div className="bg-[#2F6CE5] sm:w-full  rounded-full  ">
                      <input
                        className="cursor-pointer w-full text-white text-center px-[28px] py-[12px] "
                        type="submit"
                        value={`${loginPage ? "Sign In" : "Create Account"}`}
                        onClick={(e) => getLogin(e)}
                      />
                    </div>
                    <div
                      className="block sm:hidden underline"
                      onClick={() => setLoginPage(!loginPage)}
                    >{`${
                      loginPage ? "or, Create Account" : "or, Sign In"
                    }`}</div>
                  </div>
                </form>
                <div className="flex gap-[10px] items-center justify-center border-2 border-[#D9D9DB] mt-[24px] h-[38px]">
                  <div>
                    <img src={images.facebook_icon} alt="facebook_icon" />
                  </div>
                  Sign up with Facebook
                </div>
                <div className="flex gap-[10px] items-center justify-center border-2 border-[#D9D9DB] mt-[8px] h-[38px]">
                  <div>
                    <img src={images.google_icon} alt="google_icon" />
                  </div>
                  Sign up with Google
                </div>
                {!loginPage && (
                  <div className="block md:hidden text-center text-[#8A8A8A]">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                )}
                {loginPage && (
                  <div className="text-center mt-[23px]">Forget Password?</div>
                )}
              </div>
              {/* right section */}
              <div className="hidden md:block">
                {loginPage ? (
                  <div className="flex gap-[4px] justify-end mt-[7px] text-[13px]">
                    Don’t have an account yet?{" "}
                    <span
                      className="text-[#2F6CE5] cursor-pointer"
                      onClick={() => setLoginPage(false)}
                    >
                      {" "}
                      Create new for free!
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-[4px] justify-end mt-[7px] text-[13px]">
                    Already have an account?{" "}
                    <span
                      className="text-[#2F6CE5] cursor-pointer"
                      onClick={() => setLoginPage(true)}
                    >
                      {" "}
                      Sign In
                    </span>
                  </div>
                )}
                <div className="flex justify-center px-[30px] pt-[51px] pb-[38px]">
                  <img src={images.login_banner} alt="imaged" />
                </div>
                {!loginPage && (
                  <div className="text-[11px] mt-[19px]  text-[#8A8A8A]">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthTab;
