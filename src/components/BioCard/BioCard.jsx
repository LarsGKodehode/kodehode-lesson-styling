import styles from './biocard.module.css'

console.log(styles)

function BioCard(props) {
  // console.log(props)

  return (
    <div className={styles.bioCard}>
      <img className={styles.picture} src={props.imgSrc} alt="" />

      <div className={styles.discription}>
        <h3>Name: <span>{props.name}</span></h3>
        <h3>Short: <span>{props.short}</span></h3>
      </div>

      <div className={styles.skillBadges}>
        {props.children}
      </div>
    </div>
  )
}

export default BioCard