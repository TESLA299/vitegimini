import Chat from "./chat";
import "./style.css";
import { marked } from "marked";

document.querySelector("#app").innerHTML = `
<main class ="bg-[#212121] mx-auto p-5 min-h-dvh flex flex-col justify-center items-center">
<div id="chat_content" class="max-w-3xl w-full flex flex-col gap-y-5">
  
</div>
${Chat()}
</main>
`;
const chat_content = document.getElementById("chat_content");
const chat_text = document.getElementById("chat_text");
const send_btn = document.getElementById("send_btn");

const chat_form = document.getElementById("chat_form");
chat_form.addEventListener("submit", async (event) => {
  event.preventDefault();
  send_btn.innerHTML = "Loading...";
  send_btn.classList.add("pointer-events-none");
  try {
    const response = await fetch(
      "https://chatgpt-42.p.rapidapi.com/geminipro",
      {
        method: "POST",
        headers: {
          "x-rapidapi-key":
            "620ffcd365msh17a9ee7b7a44740p1224f5jsn5e984f491b5c",
          "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: chat_text.value,
            },
          ],
          temperature: 0.9,
          top_k: 5,
          top_p: 0.9,
          max_tokens: 256,
          web_access: false,
        }),
      }
    );
    const data = await response.json();
    const chatDiv = document.createElement("div");
    chatDiv.innerHTML = `
    <div class="w-full">
    <div class=" w-full flex justify-end items-center mb-6">
    <h1 class=" text-lg font-normal text-white border-r-2 border-r-gray-400 pr-5">
    ${chat_text.value}
    </h1>
    </div>
    <div class=" flex justify-start items-center">
    <div class=" rounded p-3 max-w-2xl w-full prose prose-invert"> 
    
    ${marked.parse(data.result)}
    </div>
    
    </div>
    </div>
    
    `;
    chat_content.append(chatDiv);
    send_btn.innerHTML = "send";
    send_btn.classList.remove("pointer-events-none");
    chat_text.value = "";
  } catch (error) {
    console.log(error);
  }
});
