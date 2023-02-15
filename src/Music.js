import femside2 from './femside2.mp3'
import virtualCold from './virtual cold_.mp3'
import ultimatum from './ultimatom.mp3'
import man from './man.mp3'
import cloud from './cloud.mp3'
import over from './over.mp3'
import vb from './vb.mp3'
import stay from './stay.mp3'
import lemon from './lemon.mp3'
import star from './star.mp3'
import what from './what.mp3'
import nothing from './nothing.mp3'
import buzz from './buzz.mp3'

const Music = () => {

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
            <h2>staystay okok</h2>
            <p>Written and performed by Harrison</p>
            <audio controls>
                <source src={stay} type="audio/mp3" />
            </audio>
            <h2>lemon pepper</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={lemon} type="audio/mp3" />
            </audio>
            <h2>im not a young man anymore</h2>
            <p>Written and performed by Harrison</p>
            <audio controls>
                <source src={man} type="audio/mp3" />
            </audio>
            <h2>ur a star im ur friend</h2>
            <p>Written and performed by Ben, Mark, and Harrison</p>
            <audio controls>
                <source src={star} type="audio/mp3" />
            </audio>
            <h2>the cloud</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={cloud} type="audio/mp3" />
            </audio>
            <h2>probable nothing</h2>
            <p>Written and performed by Harrison</p>
            <audio controls>
                <source src={nothing} type="audio/mp3" />
            </audio>
            <h2>live laugh love</h2>
            <p>Written and performed by Harrison</p>
            <audio controls>
                <source src={vb} type="audio/mp3" />
            </audio>
            <h2>over you</h2>
            <p>Written and performed by Ben & Harrison</p>
            <audio controls>
                <source src={over} type="audio/mp3" />
            </audio>
            <h2>annoying buzz (bad)</h2>
            <p>Written and performed by Dom & Harrison</p>
            <audio controls>
                <source src={buzz} type="audio/mp3" />
            </audio>
            <h2>virtual cold (Polvo)</h2>
            <p>Performed by Dom & Harrison</p>
            <audio controls>
                <source src={virtualCold} type="audio/mp3" />
            </audio>
            <h2>o what a night</h2>
            <p>Performed by Mark & Harrison</p>
            <audio controls>
                <source src={what} type="audio/mp3" />
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