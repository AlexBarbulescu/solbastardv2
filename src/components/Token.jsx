import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({ address = "xxxxxxxx" }) {
  const token = address;
  const [copied, setCopied] = useState(false);
  const copyHandle = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  return (
    <div className="token d-flex flex-wrap justify-content-between">
      <div>
        <span className="d-block mb-3">CONTRACT ADDRESS</span>
        <p className="text-uppercase lh-base">{token}</p>
      </div>
      <button onClick={() => copyHandle()} className="bg-primary text-white border-0">
        {copied ? <LuCopyCheck /> : <LuCopy />}
      </button>
    </div>
  )
}