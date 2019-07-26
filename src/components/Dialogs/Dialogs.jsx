import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <section>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={`${styles.dialog} ${styles.active}`}>
                        Sasha
                    </div>
                    <div className={styles.dialog} >
                        Dima
                    </div>
                    <div className={styles.dialog}>
                        Andrey
                    </div>
                    <div className={styles.dialog}>
                        Masha
                    </div>
                    <div className={styles.dialog}>
                        Jenia
                    </div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.message}>
                        Hi!
                    </div>
                    <div className={styles.message}>
                        Hello
                    </div>
                    <div className={styles.message}>
                        Thank you!
                    </div>
                    <div className={styles.message}>
                        Good bye!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;