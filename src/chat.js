const Chat = () => {
  return `
        
        <form id="chat_form" class = "relative mt-auto py-5 max-w-3xl w-full mx-auto ">
        <textarea id="chat_text" rows="5" placeholder="Message SharThuReinAi" class=" bg-[#303030] text-white text-base border-none outline-none resize-none w-full p-5 rounded-2xl"></textarea>
        <div class="  absolute inset-x-0 bottom-5 p-5 flex justify-end items-center">
         <button type="submit" id="send_btn" class = " bg-blue-500 text-black px-4 py-2 w-[150px] text-sm rounded-full">Send</button>
        </div>
        </form>
        `;
};
export default Chat;
