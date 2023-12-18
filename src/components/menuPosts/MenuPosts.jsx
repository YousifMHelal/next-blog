import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href={`/posts/next`} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/next.png"
              alt=""
              fill
              className={styles.image}
              sizes=""
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.nextjs}`}>NextJs</span>
          <h3 className={styles.postTitle}>NextJS App Router Intro</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yousif M.Helal</span>
            <span className={styles.date}> - 18.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href={`/posts/react2`} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/react.png"
              alt=""
              fill
              className={styles.image}
              sizes=""
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.react}`}>React</span>
          <h3 className={styles.postTitle}>React Interview Questions</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yousif M.Helal</span>
            <span className={styles.date}> - 18.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href={`/posts/next2`} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/next.png"
              alt=""
              fill
              className={styles.image}
              sizes=""
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.nextjs}`}>NextJs</span>
          <h3 className={styles.postTitle}>
            Nextjs User Login Authentication in 5 simple steps using Auth0.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yousif M.Helal</span>
            <span className={styles.date}> - 18.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href={`/posts/html`} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/html.png"
              alt=""
              fill
              className={styles.image}
              sizes=""
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.html}`}>Html</span>
          <h3 className={styles.postTitle}>
            How to create a simple Blog website using HTML and CSS only
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yousif M.Helal</span>
            <span className={styles.date}> - 18.12.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
