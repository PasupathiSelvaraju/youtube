import styles from './Youtube.module.css'
const YoutubeCard = (props) =>{
    const {videoData}=props
    return <div className={styles.container}>
        <div className={styles.thumbnail}>
            <img src={videoData.thumbnailUrl} alt={videoData.title} />


        </div>
        <div className={styles.title}>
            <p>{videoData.title}</p>

        </div>
        <div className={styles.channel}>
            <img src={videoData.channelLogoUrl} alt={videoData.channelName} />
            <p>{videoData.channelName}</p>

        </div>
        <div className={styles.reactions}>
            <p><span className={styles.likes}>views-</span>{videoData.views/1000}k</p>
            <p><span className={styles.likes}>likes-</span>{videoData.likes/1000}k</p>

            
        </div>

    </div>
}
export default YoutubeCard;