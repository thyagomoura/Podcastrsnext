import style from './styles.module.scss';

export function Player(){
    return(
        <div className={style.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora</strong>
            </header>
            <div className={style.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>
            <footer className={style.empty}>
                <div className={style.progress}>
                    <span>00:00</span>
                    <div className={style.slider}>
                        <div className={style.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>
                <div className={style.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="embaralhar"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="tocar anterior"/>
                    </button>
                    <button type="button" className={style.playButton}>
                        <img src="/play.svg" alt="tocar"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="passar musica"/>
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="repetir"/>
                    </button>
                </div>
            </footer>
        </div>
    );
}