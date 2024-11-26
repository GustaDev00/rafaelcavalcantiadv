import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";

export default {
  data: {
    navigation: {
      text: "Menu",
      menu: "Navegação",
      items: [
        { title: "Home", href: "https://rafaelcavalcantiadv.com/", icon: HomeIcon },
        { title: "Blog", href: "/" },
        { title: "Quem Somos", href: "https://rafaelcavalcantiadv.com/quem-somos/" },
        { title: "Contato", href: "https://rafaelcavalcantiadv.com/contato/" },
      ],
    },
    contact: [
      {
        text: "Celular",
        content: "+55 21 96921-4908",
        link: "tel:+5521969214908",
      },
      {
        text: "E-Mail",
        content: "contato@rafaelcavalcantiadv.com",
        link: "mailto:contato@rafaelcavalcantiadv.com",
      },
    ],
    social_share: {
      text: "Folge uns",
      icons: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/",
          icon: InstagramIcon,
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/",
          icon: FacebookIcon,
        },
        // {
        //   title: "Twitter",
        //   link: "https://x.com/home",
        //   icon: TwitterIcon,
        // },
      ],
    },
    footer: {
      text: "Contatos",
      copy: "Copyright © 2024 Rafael Cavalcanti Advogados",
      agency: (
        <>
          Mit 💚 entwickelt von{" "}
          <span>
            <a href="https://www.fiberweb.ch/" target="_blank" rel="noreferrer">
              FiberWeb.ch
            </a>
          </span>
        </>
      ),
    },
  },
  home: {
    title: "Blog Rafael Cavalcanti",
    description: (
      <>
        Advocacia Especializada de proteção e desenvolvimento patrimonial: Temos todos os serviços
        que você precisa para CRESCIMENTO, BLINDAGEM E RECUPERAÇÃO DO SEU PATRIMÔNIO.
      </>
    ),
  },
  copy: {
    copy: "Copiar link",
    copied: "Link copiado",
  },
  time: "minutos de leitura",
  latest: {
    title: "Últimos Artigos",
  },
  cta: {
    title: "Fale conosco",
    text: "Ficou com alguma dúvida? Fale conosco agora mesmo!",
    href: "https://api.whatsapp.com/send?phone=5521969214908",
  },
};
