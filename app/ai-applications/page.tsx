// app/ai-applications/page.tsx
import Breadcrumb from "../components/Breadcrumb";

const AIApplicationsPage = () => {
    return (
      <main>
        <Breadcrumb currentPage="AI 应用" />
        <article style={{maxWidth: '700px', margin: '0 auto', minHeight: '80vh'}}>
          <h1 className="text-xl font-medium">好用的 AI 软件，这是我使用过的一些案例</h1>
          <h2>
            AI 写作，内容生成
          </h2>
          <p>
            ChatGPT 还是王者
          </p>
          <h2>
            AI 克隆声音
          </h2>
          <p>
            fish.audio 是一个 AI 克隆声音的网站，可以克隆并生成自己的声音。我已经用它克隆自己的声音并用在一个视频里，效果还不错。
          </p>
          <p>
            而且每天都有一定的免费额度，用来给视频配音足够用了。
          </p>
        </article>
      </main>
    );
  };
  
  export default AIApplicationsPage;