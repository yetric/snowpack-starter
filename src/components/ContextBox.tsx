import React from "react";
import styles from "./styles/ContextBox.module.css";

interface ContextBoxProps {
    children: any;
    header?: string | null;
}

export const ContextBox = ({ children, header = null }: ContextBoxProps) => (
    <div className={styles.box}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.body}>{children}</div>
    </div>
);
