import cn from 'classnames';
import styles from './BurgerButton.module.css';

type BurgerButtonProps = {
    isMenuOpen: boolean,
    setMenuOpen: (f: boolean) => void
}

function BurgerButton({ isMenuOpen, setMenuOpen }: BurgerButtonProps) {
    return (
        <button
            className={cn(styles['mobileBurger'], { [styles['open']]: isMenuOpen })}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            <div />
            <div />
            <div />
        </button>
    )
}

export default BurgerButton