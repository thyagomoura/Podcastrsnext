import {Header} from '../components/Header';
import {Player} from '../components/Player';

import '../style/global.scss';
import style from '../style/app.module.scss';

function Myapp({Component, pageProps}){
    return (
        <div className={style.wrapper}>
            <main>
                <Header />
                <Component{...pageProps}/>
            </main>
            <Player/>
        </div>
    )
}
export default Myapp