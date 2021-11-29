import styles from './Articles.module.css';
import '../../../App.css'

const TextArticles = () => {
    return (
        <div className={styles.item} >
            <div className={styles.articlesPage} id='textArticles' style={{ visibility: 'hidden', fontSize: '1vw' }} href="">
                <p>Some text for Articles </p>
                <p>Some text for cool psycholog in Articles</p>
                <p>Some text for something Articles</p>
            </div>
        </div>
    )
}

export default TextArticles;
