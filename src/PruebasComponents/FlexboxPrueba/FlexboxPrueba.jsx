import styles from "./FlexboxPrueba.module.css"

const FlexboxPrueba = () => {
    console.log(styles)
    return (
        <>
        <div>
            <h1>Flexbox</h1>
            <div className={styles.container}>
                <div className={styles.item}> Item 1</div>
                <div className={styles.item}> Item 2</div>
                <div className={styles.item}> Item 3</div> 
            </div>
            
        </div>    
        </>
    )
}

export default FlexboxPrueba;





//<div className={styles.grid-container}>
//                <div className={styles.grid-item}>1</div>
//                <div className={styles.grid-item}>2</div>
//                <div className={styles.grid-item}>3</div>
//                <div className={styles.grid-item}>4</div>
//                <div className={styles.grid-item}>5</div>
//                <div className={styles.grid-item}>6</div>
//</div>