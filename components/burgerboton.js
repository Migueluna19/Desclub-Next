import styles from '../styles/burgerboton.module.scss'

function Burgerboton(props) {
  return (
    <div onClick={props.handleDesplegar} 
    className={`${styles.icon} ${styles.navicon5} ${props.desplegar?`${styles.open}`:''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default Burgerboton