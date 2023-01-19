import Image from "next/image";
import styles from "./AgeGateConfirmationBox.module.css";
import logo from "@/assets/images/logo.png";
export default function AgeGateConfirmationBox({ onClick }: any) {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={logo} className={styles.logo} alt="Logo" width={160} />
        <p className={styles.age_gate_title}>ARE YOU OF LEGAL DRINKING AGE?</p>
        <div>
          <button onClick={() => onClick(true)}>YES</button>
          <button onClick={() => onClick(false)}>NO</button>
        </div>
      </div>
    </>
  );
}
