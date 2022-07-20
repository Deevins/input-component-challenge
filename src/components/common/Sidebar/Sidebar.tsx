import React from "react";

import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.root}>
      <a href="https://devchallenges.io/paths/front-end-developer">
        <h3>
          <span>Dev</span>challenges.io
        </h3>
      </a>
      <span>Colors</span>
      <span>Typography</span>
      <span>Spaces</span>
      <span>Buttons</span>
      <span className={styles.active}>Inputs</span>
      <span>Grid</span>
    </div>
  );
};

export default Sidebar;
