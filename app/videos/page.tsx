import BaseLink from "@/components/link";
import Container from "@/components/container";
import Title from "@/components/title";
import SubTitle from "@/components/subtitle";
import Videos from "@/data/videos";
import VideoRow from "@/components/video-card";
import YoutubeStats from "@/components/youtube-stats";

export const revalidate = 86400; // 60*60*24

export default async function VideosPage() {
  return (
    <>
      <Container>
        <Title>
          Frontend ve Backend alanında ürettiğim eğitim videolarının tam
          listesi. Youtube üzerinden izledikten sonra buradan işaretleyebilir ve
          düzenli olarak takip edebilirsiniz.
        </Title>
        <div className="mt-10">
          <YoutubeStats />
        </div>
      </Container>

      <Container className="mt-20">
        <div className="space-y-10">
          {Object.keys(Videos).map((catKey) => {
            const category = Videos[catKey];
            return (
              <div key={catKey}>
                <SubTitle className="py-4">{catKey}</SubTitle>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {category.map((video) => {
                    return <VideoRow key={video.title} {...video} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
