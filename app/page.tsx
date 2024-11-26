import { type Metadata } from "next";
import listPosts from "@/api/list-posts";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Que tipo de serviço está procurando hoje?",
  description: "",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_API_URL}/`,
    title: "Que tipo de serviço está procurando hoje?",
    description: "",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    title: "Que tipo de serviço está procurando hoje?",
    description: "",
  },
};

const Home = async () => {
  const data = await listPosts();

  console.log(data);

  if (!data.length) return null;

  return <HomeTemplate values={data} />;
};

export default Home;
