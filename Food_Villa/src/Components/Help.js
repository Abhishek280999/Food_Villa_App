
import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { FAQ } from "./Constants";
import Footer from "./Footer";
import Nav from "./Navbar";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
    return (
     <div>
           <div className="flex flex-col shadow rounded-md p-2 5 m-2 5">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-title">{title}</h3>
                {
                    isVisible ? (
                        <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
                    ) : (
                        <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
                    )
                }
            </div>
            {isVisible && <p className="text-bio text-base">{description}</p>}
        </div>
     </div>
    )
}



const Help = () => {
    const [visibleSection, setVisibleSection] = useState("");  //Initially description of all questions are hidden

    return (
       <div>
       <Nav/>
         <div className="container">
            <div className="card-container">
                {FAQ.map((question) => {
                    return (
                        <Section key={question.id} id={question.id} title={question.title} description={question.description}
                            isVisible={visibleSection === question.id}
                            setIsVisible={(display) => {
                                if (display) {
                                    setVisibleSection(question.id)
                                } else {
                                    setVisibleSection(" ")
                                }
                            }}
                        />
                    )
                })}
            </div>
        </div>
        <Footer/>
       </div>
    )
}

export default Help;