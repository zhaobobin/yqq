import styles from './GlobalContent.less'

export default function GlobalContent (props) {
  return(
    <div className={styles.container} style={props.style}>
      {props.children}
    </div>
  )
};
