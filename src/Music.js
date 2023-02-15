import femside2 from './femside2.mp3'
import virtualCold from './virtual cold_.mp3'
import ultimatum from './ultimatom of love.mp3'
import man from './man.mp3'
import cloud from './cloud.mp3'
import over from './over.mp3'

const Music = () => {

    //     const songs = [
    //         { title: 'ultimatum of love', artist: 'Harrison, Ben, & Mark', id: 1 },
    //         { title: 'ur a star im ur friend', artist: 'Harrison, Ben, & Mark', id: 2 },
    //         { title: 'fem side', artist: 'Harrison & Dom', id: 3 },
    //         { title: 'staystay okok', artist: 'Harrison', id: 4 }
    // ];

    return (
        <div className="music">
            <h2>ultimatom of love</h2>
            <p>Written and performed by Ben & Harrison</p>
            <audio controls>
                <source src={ultimatum} type="audio/mp3" />
            </audio>
            <h2>fem side</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={femside2} type="audio/mp3" />
            </audio>
            <h2>virtual cold</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={virtualCold} type="audio/mp3" />
            </audio>
            <h2>im not a young man anymore</h2>
            <p>Written and performed by Harrison</p>
            <audio controls>
                <source src={man} type="audio/mp3" />
            </audio>
            <h2>the cloud</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={cloud} type="audio/mp3" />
            </audio>
            <h2>over you</h2>
            <p>Written and performed by Ben & Harrison</p>
            <audio controls>
                <source src={over} type="audio/mp3" />
            </audio>

            {/* {songs.map((song) => (
                <div className="song-preview" key={song.id}>
                    <h2>{song.title}</h2>
                    <p>Written and performed by {song.artist}</p>
                </div>
            ))} */}
        </div>
    );
}

export default Music;