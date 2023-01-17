import NextImage from "next/image";
import Social from "@/components/social";
import { StyleLink } from "@/components/link";
import Title from "@/components/title";
import Container from "@/components/container";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">Merhaba, Ben Samet AKBAL</b>
            <br />
          </Title>

          <p className="text-xl">
            Spring Boot, Dotnet Core, React,Vue Angular, ve Flutter ile full stack uygulamalar geliştiriyorum.
            Şu anda <StyleLink href="https://infonal.com/">Infonal</StyleLink>'da yazılım geliştirici olarak çalışıyorum.
          </p>

          <p className="text-xl">
            Youtube kanalımda vakit buldukça kendi çalıştığım teknolojilerle ilgili içerik üretmeye çalışıyorum.
            Onların kaynak kodlarını ve aklıma gelen bazı fikirleri taslak olarak Github sayfamda paylaşıyorum. 💻
          </p>

        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>
    </>
  );
}
