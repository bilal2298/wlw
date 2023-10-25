import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDown } from "react-icons/io";
// import { useDispatch, useSelector } from 'react-redux'
// import { openSidebar } from '../../redux/actions/sidebar'

import Layout from "../Layout";

const Sidebar = () => {
  // const {isOpen} = useSelector((state)=> state.sideBar)

  //    const dispatch = useDispatch()

  const [isOpen, setisOpen] = useState(true);

  const [isDropDownOpen, setIsDropDownOpen] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  }); // for dropdown project
  const toggleDropDown = (dropdownName) => {
    setIsDropDownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <Layout>
      <div className="">
        <aside
          className={`${
            isOpen ? "w-64" : "w-16"
          } fixed top-8  duration-300 bg-[#F8F9FA] left-0 z-40 h-screen`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto relative rounded-xl">
            <button>
              <IoIosArrowDropleftCircle
                className={`${
                  !isOpen && "rotate-180 mr-3"
                } text-3xl rounded-xl p-1 absolute m-2 z-10 right-1 top-0`}
              />
            </button>
            <ul className="space-y-2 font-medium">
              <li>
                <Link className="flex items-center p-2 focus:bg-white rounded-full group">
                  <div className=" w-[35px] h-[35px] relative bg-[#4FD1C5] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/dashboard-white.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className="ml-3 font-bold text-sm text-[#2A2865]">
                      Dashboard
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 focus:bg-white rounded-full group"
                >
                  <div className=" w-[35px] h-[35px] relative rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/notification.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span
                      className={` ml-3 text-[#A0AEC0]  text-sm origin-left`}
                    >
                      Notification
                    </span>
                  )}
                  {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:text-blue-300">3</span> */}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleDropDown("dropdown1")}
                  to="/projects"
                  type="button"
                  className="flex items-center w-full p-2 leading-4 rounded-full focus:bg-white"
                >
                  <div className=" w-[35px] h-[35px] relative bg-[#fff] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/request.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className={`origin-left text-sm text-[#A0AEC0] ml-3`}>
                      Request Center
                    </span>
                  )}
                  {isOpen && (
                    <IoIosArrowDown
                      className={`text-[#A0AEC0] ${
                        isDropDownOpen["dropdown1"] && "rotate-180"
                      }  absolute right-5 text-lg`}
                    />
                  )}
                  {/* <GoProjectSymlink className='text-lg text-gray-900'/>
                        <span onClick={toggleDropDown} className="flex-1 ml-3 text-left text-black whitespace-nowrap">Projects</span> */}
                </Link>
                {/* {isDropDownOpen['dropdown1'] &&
                      <ul className=" py-2 space-y-2">
                        <li>
                           
                            <Link to="/progress" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20  w-full p-2 transition duration-75 rounded-lg ${!isOpen? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 text-[#2FA9A9]`}>
                                
                                { isOpen && <span className={`origin-left text-[#2FA9A9] ml-3`}>Progress</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="management" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20   w-full p-2 transition duration-75 rounded-lg ${!isOpen? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 text-[#2FA9A9]`}>
                               
                                { isOpen && <span className={`origin-left text-[#2FA9A9] ml-3`}>Management</span>}
                                </Link>
                        </li>
                    </ul>} */}
                {isDropDownOpen["dropdown1"] && (
                  <ul className="ml-14 list-disc text-[#A0AEC0] marker:text-[#2FA9A9] py-2 space-y-6">
                    <li className="text-sm">Request Stream</li>
                    <li className="text-sm">Add New Request</li>
                    <li className="text-sm">My Request</li>
                    <li className="text-sm">Purchased</li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  onClick={() => toggleDropDown("dropdown2")}
                  to="/projects"
                  type="button"
                  className="flex items-center  w-full p-2 text-base rounded-full group focus:bg-white"
                >
                     <div className=" w-[35px] h-[35px] relative bg-[#fff] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/business.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className={`origin-left text-sm text-[#A0AEC0] ml-3`}>
                      Bussiness Customization
                    </span>
                  )}
                  {isOpen && (
                    <IoIosArrowDown
                      className={`text-[#A0AEC0] ${
                        isDropDownOpen["dropdown2"] && "rotate-180"
                      } absolute right-5 text-lg`}
                    />
                  )}
                  {/* <GoProjectSymlink className='text-lg text-gray-900'/>
                        <span onClick={toggleDropDown} className="flex-1 ml-3 text-left text-black whitespace-nowrap">Projects</span> */}
                </Link>
                {/* {isDropDownOpen['dropdown2'] &&<ul className=" py-2 space-y-2">
                        <li>
                           
                            <Link to="/progress" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20   w-full p-2 transition duration-75 rounded-lg ${!isOpen? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 `}>
                               
                                { isOpen && <span className={`origin-left text-[#A0AEC0] ml-3`}>Progress</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="management" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20   w-full p-2 transition duration-75 rounded-lg ${!isOpen? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 `}>
                               
                                { isOpen && <span className={`origin-left text-[#A0AEC0] ml-3`}>Management</span>}
                                </Link>
                        </li>
                    </ul>} */}
                {isDropDownOpen["dropdown2"] && (
                  <ul className="ml-14 list-disc text-[#A0AEC0] marker:text-[#2FA9A9] py-2 space-y-6">
                    <li className="text-sm">General Information</li>
                    <li className="text-sm">Membership Information</li>
                    <li className="text-sm">Credit Information</li>
                    <li className="text-sm">Profile Information</li>
                    <li className="text-sm">Contact Information</li>
                    <li className="text-sm">Feature</li>
                    <li className="text-sm">User Authorization</li>
                    <li className="text-sm">My HS Codes</li>
                    <li className="text-sm">Product Management</li>
                    <li className="text-sm">Business Settings</li>
                    <li className="text-sm">Videos</li>
                    <li className="text-sm">Announcements</li>
                    <li className="text-sm">Elements Of Trust</li>
                  </ul>
                )}
              </li>
             
              <li>
                <Link
                  to="/tasks"
                  className="flex items-center  p-2 text-gray-900 rounded-full group focus:bg-white"
                >
                     <div className=" w-[35px] h-[35px] relative bg-[#fff] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/seo.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className={`origin-left text-sm text-[#A0AEC0] ml-3`}>
                      SEO{" "}
                    </span>
                  )}
                  {/* <FaTasks className='text-lg text-gray-900'/>
                        <span className="flex-1 ml-3 text-black whitespace-nowrap">Tasks</span> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className="flex items-center p-2 text-gray-900 rounded-full group focus:bg-white"
                >
                     <div className=" w-[35px] h-[35px] relative bg-[#fff] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/forie.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className={`origin-left text-sm text-[#A0AEC0] ml-3`}>
                      Forie contact{" "}
                    </span>
                  )}
                  {/* <FaTasks className='text-lg text-gray-900'/>
                        <span className="flex-1 ml-3 text-black whitespace-nowrap">Tasks</span> */}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleDropDown("dropdown3")}
                  to="/projects"
                  type="button"
                  className="flex items-center  w-full p-2 text-base rounded-full focus:bg-white group "
                >
                     <div className=" w-[35px] h-[35px] relative bg-[#fff] rounded-full">
                    <img
                      className="w-[20px] h-[20px] absolute top-[49.5%] left-[49.9%]"
                      style={{ transform: "translate(-50%, -50%)" }}
                      src="./assets/images/icons-sidebar/message.png"
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <span className={`origin-left text-sm text-[#A0AEC0] ml-3`}>
                      Message Center
                    </span>
                  )}
                  {isOpen && (
                    <IoIosArrowDown
                      className={`text-[#A0AEC0] ${
                        isDropDownOpen["dropdown3"] && "rotate-180"
                      } absolute right-5 text-lg`}
                    />
                  )}
                  {/* <GoProjectSymlink className='text-lg text-gray-900'/>
                        <span onClick={toggleDropDown} className="flex-1 ml-3 text-left text-black whitespace-nowrap">Projects</span> */}
                </Link>
                {/* {isDropDownOpen['dropdown3'] && <ul className=" py-2 space-y-2">
                                    <li>

                                        <Link to="/progress" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20   w-full p-2 transition duration-75 rounded-lg ${!isOpen ? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 `}>

                                            {isOpen && <span className={`origin-left text-[#A0AEC0] ml-3`}>Progress</span>}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="management" className={`flex items-center backdrop-blur-md bg-white/ hover:backdrop-blur-md hover:bg-white/20   w-full p-2 transition duration-75 rounded-lg ${!isOpen ? 'pl-2' : 'pl-8'}  group hover:bg-gray-100 text-[#2FA9A9]`}>

                                            {isOpen && <span className={`origin-left text-[#A0AEC0] ml-3`}>Management</span>}
                                        </Link>
                                    </li>
                                </ul>} */}
                {isDropDownOpen["dropdown3"] && (
                  <ul className="ml-14 list-disc text-[#A0AEC0] marker:text-[#2FA9A9] py-2 space-y-6">
                    <li className="text-sm">Inbox</li>
                    <li className="text-sm">Sentt</li>
                    <li className="text-sm">Templates</li>
                    <li className="text-sm">Folders</li>
                    <li className="text-sm">Trash Folders</li>
                    <li className="text-sm">Contacts</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Sidebar;
