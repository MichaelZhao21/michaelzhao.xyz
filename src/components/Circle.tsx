import styles from '../styles/Circle.module.css';

const Circle = (props: {
    top?: string;
    left?: string;
    size: string;
    fill: string;
    delay?: string;
    noAnimation?: boolean;
    staticPosition?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={styles.shape + " " + props.className}
            style={{
                top: props.top,
                left: props.left,
                width: props.size,
                height: props.size,
                animationDelay: props.delay,
                position: props.staticPosition ? 'static' : 'absolute',
                animation: props.noAnimation ? 'none !important' : undefined,
                opacity: props.noAnimation ? 1 : 0,
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill={props.fill} />
            </svg>
        </div>
    );
};

export default Circle;
