import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nidhi Tandon</title>
                <meta name="description" content="Nidhi's blog"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Nidhi Tandon
                </h1>

                <p className={styles.description}>
                    <br/>Health enthusiast and wellness vocalist
                    <br/>Loves music and know a few chords on 🎸
                    <br/>Studying stoicism and spirituality
                    <br/>Dog lover
                    <br/>Engineer
                </p>

                {/*<a>Link to blogs</a>*/}

                {/*<div className={styles.grid}>*/}
                {/*    <a href="/blog" className={styles.card}>*/}
                {/*        <h2>Are you a Product Engineer?</h2>*/}
                {/*        <p>Find in-depth about what to expect when joining the role of a Product Engineer</p>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </main>
        </div>
    )
}


