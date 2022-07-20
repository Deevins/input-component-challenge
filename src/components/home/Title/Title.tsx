import React from "react";

import styles from "./Title.module.scss";

type Props = {
  title: string;
  style?: React.CSSProperties;
};

const Title: React.FC<Props> = ({ title, style }) => {
  return (
    <h2 className={styles.title} style={style}>
      {title}
    </h2>
  );
};

export default Title;
