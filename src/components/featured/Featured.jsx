import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, developers</b>{" "}
        {`let's discover programming news
        together.`}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/doc.png" alt="post" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>The Power Of Documentation.</h1>
          <p className={styles.postDesc}>
            Documentation is a great thing. Might be a bit intimidating at the
            beginning, but overall it’s the main source of the most relevant
            information. When you start learning to code, one of the first
            things you might see in your course/bootcamp/guide is a suggestion
            to check the documentation of what you’re learning. Usually it’s
            also mentioned that information there could be hard to follow at
            first, but you’ll need it sooner or later.
          </p>
          <button className={styles.btn}>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
