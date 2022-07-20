import React from "react";
import styles from "./ContainerTitle.module.scss";

type Props = {
  text: string;
};

const ContainerTitle: React.FC<Props> = ({ text }) => {
  return <h2 className={styles.root}>{text}</h2>;
};

export default ContainerTitle;
