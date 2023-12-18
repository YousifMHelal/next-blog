"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialBtn} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialBtn}>Sign in with Github</div>
        <div className={styles.socialBtn}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
