
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import AboutUSMD from "../static/AboutUSMD.md"


function AboutUs(){
    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
      fetch(AboutUSMD)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);
    return (
        <div className="my-4 sm:my-12 flex flex-col justify-center items-center" >
            <img src="//files.revome.cn/public/4b2846d54d38821295c932bc801752ec_onlytime.png" className="w-full "></img>
             <div className=" animate-fade-in-down m-4 p-4 text-black/90
             sm:mx-32 sm:p-12">
            <article className="prose prose-sm sm:prose-base ">
            <ReactMarkdown children={markdown} />
            </article>
        </div>
        </div>
    )
}

export default AboutUs;