import config from "../danieldev-config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = { 
        //backgroundColor: "red" 
    };

    //console.log(config.playlists);

    return (
        <>
        <CSSReset />
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
        </>
    );
}

export default HomePage

//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    )
//}

const StyledHeader = styled.div`
    .banner{
        width: 100%;
        height: 200px;
        img {
			object-fit: cover;
		}	        
    }
    .user-info {
        img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <div className="banner">
				<img className="banner" src="https://images.unsplash.com/photo-1624280433509-b01afeaf68e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" alt="banner" />
			
            </div>   
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(propriedades) {
    //console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    //Statement
    //Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )    
            })}
        </StyledTimeline>
    )
}