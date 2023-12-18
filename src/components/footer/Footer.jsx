import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.logo}>dev</h1>
        <p className={styles.desc}>
          {`In the world of web development, building a blog is often one of the first projects for beginners. In this tutorial, we'll explore how to create a simple yet powerful blog application using Next.js, a popular React framework.`}
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/"> home</Link>
          <Link href="/"> blog</Link>
          <Link href="/"> content</Link>
          <Link href="/"> about</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/"> React</Link>
          <Link href="/"> NextJs</Link>
          <Link href="/"> Html</Link>
          <Link href="/"> JavaScript</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/"> facebook</Link>
          <Link href="/"> instagram</Link>
          <Link href="/"> youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
