
import UserAgreementMD from "../../static/UserAgreementMD.md"
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function UserAgreement() {

    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
      fetch(UserAgreementMD)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);
    return (
        <div className="my-4 sm:my-12">
             <h1 className="text-lg px-5 font-bold py-2
             sm:text-3xl sm:px-32">PartyRoomApp 用户协议</h1>
             <div className=" animate-fade-in-down m-4 p-4 text-black/90 relative bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5
             sm:mx-32 sm:p-12">
            <article className="prose prose-sm sm:prose-base ">
            <ReactMarkdown children={markdown} />
            </article>
        </div>
        </div>
    )
}

export default UserAgreement;