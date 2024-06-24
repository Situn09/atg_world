import React, { useState } from "react";
import { images } from "../assets";
import PopupEditBox from "./PopupEditBox";
import AuthTab from "./AuthTab";

const MainBody = ({ authTab, loginStatus }) => {
  const [showCrossIcon, setShowCrossIcon] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const [posistion, setPosistion] = useState({ top: 0, left: 0 });
  const { showAuthTab, setShowAuthTab } = authTab;

  const openEditBox = (e) => {
    setShowEditBox(true);
    // alert(e.clientX);
    const x = e.clientX - 100;
    const y = e.clientY;
    setPosistion({ top: y, left: x });
    console.log(x, y);
  };
  const closeEditBox = () => {
    setShowEditBox(false);
  };
  return (
    <>
      {/* Login popup */}
      {showAuthTab && (
        <AuthTab setShowAuthTab={setShowAuthTab} loginStatus={loginStatus} />
      )}
      <div onClick={closeEditBox}>
        {/* hero image section */}
        <div className="relative w-full h-full">
          <div className="absolute top-0 h-[100%] w-[100%] bg-black opacity-50"></div>
          <div>
            <img
              className="w-full hidden  sm:block"
              src={images.hero_image}
              alt="hero_image"
            />
          </div>
          {/* mobile view hero image */}
          <div className="flex items-center absolute top-0 mt-[14px] w-full sm:hidden justify-between px-[16px]">
            <div>
              <img src={images.arrow_icon} alt="arrow_icon" />
            </div>
            <div
              className="cursor-pointer border-2 border-white px-[10px] py-[8px] text-white"
              onClick={() => setShowAuthTab(true)}
            >
              Join group
            </div>
          </div>
          <div>
            <img
              className="w-full block sm:hidden"
              src={images.mobile_view_hero_image}
              alt="hero_image"
            />
          </div>
          <div className="absolute bottom-16 px-[16px] sm:px-[25px] md:px-[75px] lg:px-[125px] xl:px-[200px]">
            <div className="text-[#FFFFFF] font-[IBM Plex Sans] text-[17px] sm:text-[36px] ">
              Computer Engineering
            </div>
            <div className="text-[#FFFFFF] font-[IBM Plex Sans] text-[12px] sm:text-[18px]">
              142,765 Computer Engineers follow this
            </div>
          </div>
        </div>
        {/* post section */}
        <div className=" pt-[47px] sm:px-[25px] md:px-[75px] lg:px-[125px] xl:px-[200px] ">
          <header className="hidden sm:flex justify-between pb-[20px] border-[#E0E0E0] border-b-2">
            {/* right side header option */}
            <div className="flex gap-[20px] ">
              <div className="border-b-2 border-b-[#000000] mb-[-20px] pb-[20px] content-center">
                All Posts(32)
              </div>
              <div className="text-[#8A8A8A] content-center">Article</div>
              <div className="text-[#8A8A8A] content-center">Event</div>
              <div className="text-[#8A8A8A] content-center">Education</div>
              <div className="text-[#8A8A8A] content-center">Job</div>
            </div>
            {/* left side header option */}
            <div className="flex gap-[16px]">
              <div className="flex items-center px-[12px] py-[8px] gap-[10px] bg-[#EDEEF0]">
                Write a Post
                <div>
                  <img src={images.dropdown_icon} alt="dropdown_icon" />
                </div>
              </div>
              <div className="flex items-center gap-[6px] text-white bg-[#2F6CE5] px-[12px] py-[8px]">
                <div>
                  <img
                    className="text-[#2F6CE5]"
                    src={images.add_profile}
                    alt="add_profile"
                  />
                </div>
                Join Group
              </div>
            </div>
          </header>
          {/* mobile view post header */}
          <header className="flex sm:hidden justify-between px-[16px]">
            <div className="text-[20px] font-bold"> Post(368)</div>
            <div className="flex gap-[4px] items-center px-[10px] bg-[#F1F3F5] h-[32px]">
              Filter:All{" "}
              <div>
                <img src={images.dropdown_icon} alt="dropdown_icon" />
              </div>
            </div>
          </header>
          <div className="flex justify-between pt-[28px] gap-[50px]">
            {/* posts */}
            <main className="max-w-[692px] ">
              {/* Edit popup box */}
              {showEditBox && <PopupEditBox coordinate={posistion} />}
              {/* Article post */}
              <div className="border-[#E0E0E0] border-2 mb-[16px]">
                <div>
                  <img src={images.sk_blog} alt="blog_image" />
                </div>
                <div className="px-[20px]">
                  <div className="pt-[20px] pb-[10px]">✍️ Article</div>
                  <div className="flex justify-between">
                    <div className="text-[26px]">
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </div>
                    <div onMouseOver={(e) => openEditBox(e)}>
                      <img src={images.three_dot} alt="three_dot" />
                    </div>
                  </div>
                  <div className="pt-[12px] pb-[32px]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </div>
                  <div className="flex justify-between pb-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <div>
                        <img src={images.sk} alt="user_image" />
                      </div>
                      <div>Sarthak Kamra</div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={images.eye_icon} alt="eye_icon" />
                      </div>
                      <div className="pr-[40px] pl-[8px]">1.4k views</div>
                      <div>
                        <img src={images.share_icon} alt="share_icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Eductional Post */}
              <div className="border-[#E0E0E0] border-2 mb-[16px]">
                <div>
                  <img src={images.sw_blog} alt="blog_image" />
                </div>
                <div className="px-[20px]">
                  <div className="pt-[20px] pb-[10px]">🔬️ Education</div>
                  <div className="flex justify-between">
                    <div className="text-[26px]">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </div>
                    <div onMouseOver={(e) => openEditBox(e)}>
                      <img src={images.three_dot} alt="three_dot" />
                    </div>
                  </div>
                  <div className="pt-[12px] pb-[32px]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </div>
                  <div className="flex justify-between pb-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <div>
                        <img src={images.sw} alt="user_image" />
                      </div>
                      <div>Sarah West</div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={images.eye_icon} alt="eye_icon" />
                      </div>
                      <div className="pr-[40px] pl-[8px]">1.4k views</div>
                      <div>
                        <img src={images.share_icon} alt="share_icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Meetup post */}
              <div className="border-[#E0E0E0] border-2 mb-[16px]">
                <div>
                  <img src={images.rj_blog} alt="blog_image" />
                </div>
                <div className="px-[20px]">
                  <div className="pt-[20px] pb-[10px]">🗓️ Meetup</div>
                  <div className="flex justify-between">
                    <div className="text-[26px]">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </div>
                    <div onMouseOver={(e) => openEditBox(e)}>
                      <img src={images.three_dot} alt="three_dot" />
                    </div>
                  </div>
                  <div className=" pb-[32px]">
                    <div className="flex  pt-[12px] pb-[16px]">
                      <div className="flex items-center gap-[4px] mr-[50px]">
                        <div>
                          <img src={images.calender_icon} alt="calender_icon" />
                        </div>
                        <div>Fri, 12 Oct, 2018</div>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <div>
                          <img src={images.location_icon} alt="location_icon" />
                        </div>
                        <div>Ahmedabad, India</div>
                      </div>
                    </div>
                    <div className="flex justify-center border-2 text-[#E56135]">
                      Visit Website
                    </div>
                  </div>
                  <div className="flex justify-between pb-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <div>
                        <img src={images.rj} alt="user_image" />
                      </div>
                      <div>Ronal Jones</div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={images.eye_icon} alt="eye_icon" />
                      </div>
                      <div className="pr-[40px] pl-[8px]">1.4k views</div>
                      <div>
                        <img src={images.share_icon} alt="share_icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Job post */}
              <div className="border-[#E0E0E0] border-2 mb-[16px]">
                <div className="px-[20px]">
                  <div className="pt-[20px] pb-[10px]">💼️ Job</div>
                  <div className="flex justify-between">
                    <div className="text-[26px]">Software Developer</div>
                    <div onMouseOver={(e) => openEditBox(e)}>
                      <img src={images.three_dot} alt="three_dot" />
                    </div>
                  </div>
                  <div className=" pb-[32px]">
                    <div className="flex  pt-[12px] pb-[16px]">
                      <div className="flex items-center gap-[4px] mr-[50px]">
                        <div>
                          <img src={images.box_icon} alt="box_icon" />
                        </div>
                        <div>Innovaccer Analytics Private Ltd.</div>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <div>
                          <img src={images.location_icon} alt="location_icon" />
                        </div>
                        <div>Noida, India</div>
                      </div>
                    </div>
                    <div className="flex justify-center border-2 text-[#02B875]">
                      Apply on Timesjobs
                    </div>
                  </div>
                  <div className="flex justify-between pb-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <div>
                        <img src={images.jg} alt="user_image" />
                      </div>
                      <div>Joseph Gray</div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={images.eye_icon} alt="eye_icon" />
                      </div>
                      <div className="pr-[40px] pl-[8px]">1.4k views</div>
                      <div>
                        <img src={images.share_icon} alt="share_icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile view create post icon */}
              <div className="fixed bottom-[18px] right-[18px]  sm:hidden">
                <img src={images.create_post_icon} alt="create_post_icon" />
              </div>
            </main>
            {/* location  */}
            <aside className="w-[243px] hidden sm:block">
              <div className="flex items-center justify-between border-b-2 border-[#B8B8B8] pb-[11px] mb-[32px]">
                <div className="flex items-center">
                  <div>
                    <img src={images.location_icon} alt="location_icon" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.target.style.display = "none";
                      setShowCrossIcon(true);
                    }}
                  >
                    Noida, India
                  </div>
                  {showCrossIcon && (
                    <input type="text" placeholder="Enter Your Location" />
                  )}
                </div>
                <div>
                  {showCrossIcon ? (
                    <img src={images.cross_icon} alt="pen_icon" />
                  ) : (
                    <img src={images.pen_icon} alt="pen_icon" />
                  )}
                </div>
              </div>
              <div className="flex items-baseline gap-[4px] text-[#B8B8B8]">
                <div>
                  <img src={images.warning_icon} alt="warining_icon" />
                </div>
                <div className="text-[12px] ">
                  Your location will help us serve better and extend a
                  personalised experience.
                </div>
              </div>
              {/* login page content */}
              {loginStatus.isLogin && (
                <div className="mt-[54px] w-[243px]">
                  <div className="flex items-center gap-[4px] mb-[24px]">
                    <div>
                      <img src={images.like_icon} alt="like_icon" />
                    </div>
                    RECOMMENDED GROUPS
                  </div>
                  <div className="flex justify-between mt-[22px]">
                    <div className="flex items-center gap-[12px]">
                      <div>
                        <img src={images.leisure} alt="profile_img" />
                      </div>
                      <div>Leisure</div>
                    </div>
                    <div className="py-[4px] px-[12px] bg-[#EDEEF0] rounded-full">
                      Follow
                    </div>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                    <div className="flex items-center gap-[12px]">
                      <div>
                        <img src={images.activism} alt="profile_img" />
                      </div>
                      <div>Activism</div>
                    </div>
                    <div className="py-[4px] px-[12px] bg-[#EDEEF0] rounded-full">
                      Follow
                    </div>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                    <div className="flex items-center gap-[12px]">
                      <div>
                        <img src={images.mba} alt="profile_img" />
                      </div>
                      <div>MBA</div>
                    </div>
                    <div className="py-[4px] px-[12px] bg-[#EDEEF0] rounded-full">
                      Follow
                    </div>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                    <div className="flex items-center gap-[12px]">
                      <div>
                        <img src={images.philosophy} alt="profile_img" />
                      </div>
                      <div>Philosophy</div>
                    </div>
                    <div className="py-[4px] px-[12px] bg-[#EDEEF0] rounded-full">
                      Follow
                    </div>
                  </div>
                  <div className="flex justify-end text-[#2F6CE5] mt-[54px]">
                    See More...
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
