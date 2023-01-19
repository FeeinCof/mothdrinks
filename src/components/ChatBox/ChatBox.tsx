import Image from "next/image";
import styles from "./ChatBox.module.css";
import { chat, sleeping, send, arrow_down, remove } from "@/assets/icons";
import MOTH from "@/assets/images/MOTH.png";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
export default function ChatBox() {
  const [isChatShow, setChatShow] = useState(false);
  const toggleChat = () => {
    setChatShow(!isChatShow);
  };
  return (
    <>
      <div className={styles.chat_button} onClick={() => toggleChat()}>
        {isChatShow ? (
          <Image src={remove} alt="icon" width={58} />
        ) : (
          <Image src={chat} alt="icon" width={58} />
        )}
      </div>
      {isChatShow && (
        <div className={styles.chat_container}>
          <Image
            onClick={() => toggleChat()}
            className={styles.close_button}
            src={arrow_down}
            alt="icon"
          />
          <div className={styles.chat_container_header}>
            <Image src={MOTH} className={styles.chat_image} alt="MOTH Image" />
            <Image src={logo} className={styles.logo} alt="Logo" />
            <span>
              <Image
                src={sleeping}
                alt="icon"
                style={{
                  transform: "translateY(4px)",
                  marginRight: "4px",
                }}
              />
              Away until 4:00 PM
            </span>
          </div>
          <div className={styles.chat_container_chatspace}>
            <div className={styles.chat_container_inner}>
              <a tabIndex={-1} href="">
                WE RUN ON <span className={styles.re_amaze}>re:amaze</span>
              </a>
            </div>
          </div>
          <form className={styles.chat_container_input}>
            <input
              type="text"
              placeholder="Enter yout question or message here"
              className={styles.input_text}
            ></input>
            <div>
              <input type="file" className={styles.input_file} multiple></input>
              <button className={styles.submit}>
                <Image src={send} alt="icon" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
