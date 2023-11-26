import "./index.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const listGames = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legendsq",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    href: "https://www.twitch.tv/directory/category/tom-clancys-rainbow-six-siege",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-144x192.jpg",
    alt: "Imagem do jogo Rainbow Six Siege",
  },
  {
    href: "https://www.twitch.tv/directory/category/world-of-warcraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/18122-144x192.jpg",
    alt: "Imagem do jogo World Of Warcraft",
  },
  {
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
  {
    href: "https://www.twitch.tv/directory/category/counter-strike",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg",
    alt: "Imagem do jogo Counter Strike 2",
  },
];
const channelStreamers = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    href: "https://www.twitch.tv/alanzoka",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },
  {
    href: "https://www.twitch.tv/cellbit",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
    alt: "Imagem de CellBit",
  },
];

const socialListData = [
  {
    href: "https://www.instagram.com/walmir.marques/",
    src: "assets/instagram.svg",
    alt: "Instagram do Walmir Marques",
  },
  {
    href: "https://www.linkedin.com/in/walmir-marques-filho-1a0972101/",
    src: "assets/linkedin.svg",
    alt: "Linkedin do Walmir Marques",
  },
  {
    href: "https://github.com/walmir-marques",
    src: "assets/github.svg",
    alt: "GitHub do Walmir Marques",
  },
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {listGames.map((games) => (
            <ListItem href={games.href} src={games.src} alt={games.alt} />
          ))}
        </Section>

        <Section
          title="Canais e Streamers "
          subtitle="Lista de canais de transmissao que mais gosto de assistir!"
          className="channel-list"
        >
          {channelStreamers.map((channel) => (
            <ListItem href={channel.href} src={channel.src} alt={channel.alt} />
          ))}
        </Section>

        <Section
          title="Minhas redes sociais."
          subtitle="Se conecte comigo agora mesmo!!!"
          className="social-list"
        >
          {socialListData.map((social) => (
            <ListItem href={social.href} src={social.src} alt={social.alt} />
          ))}
        </Section>
      </main>
    </div>
  );
}
