import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./styles.module.css";
export const Flip = ({ frontImage, backImage }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{
          backgroundImage: `url(${backImage})`,
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          backgroundImage: `url(${frontImage})`,
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
};
