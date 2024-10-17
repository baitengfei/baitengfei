// app/page.tsx
const HomePage = () => {
    return (
      <main>
        <article>
          <h2>白腾飞简介</h2>
          <p>
            我是一个科技行业的从业者，职位是产品经理，长期专注于 AI、机器人、智能家居、泛智能硬件等领域。正在尝试用 AI 自己做软硬件开发。
          </p>
          <p>
          我做过的产品包括智能音箱，智能手表，家庭机器人，餐饮机器人等，主要是 AI 技术在生活场景的落地应用。
          </p>
          <p>
          希望能成为 AI 时代的独立开发者。
          </p>
        </article>
  
        <article>
          <h2>个人开发作品</h2>
          <h3>
            宝宝时刻
          </h3>
          <p>
            一个育儿应用，帮助家长记录宝宝成长的点点滴滴。
          </p>
          <h3>逃脱智能房子</h3>
          <p>
            一个密室逃脱类的小游戏。谜题使用了一些智能家居的元素。
          </p>
         
          <p>
            另外我把代码开源了，内容包含密室逃脱游戏基本上所有的功能模块，大家可以参考设计自己的密室逃脱小游戏 --{' '}
            <a
              href="https://github.com/baitengfei/EscapeRoomGame"
              style={{ fontSize: 'medium', fontWeight: 'lighter', fontStyle: 'italic', color: '#333' }}
            >
              GitHub 项目链接
            </a>
          </p>
        </article>
  
        <article>
          <h2>联系我</h2>
          <p>
            欢迎一起交流更多关于未来科技和生活的话题，「陪伴机器人」我最近思考比较多，如有兴趣欢迎一起探讨。
          </p>
          <p style={{ color: '#d3d3d3', fontWeight: 'lighter' }}>
            微信ID: tengfeibai (请备注：来自博客)
          </p>
          <p style={{ color: '#d3d3d3', fontWeight: 'lighter' }}>
            Mail: iterrybai@gmail.com (请备注：来自博客)
          </p>
        </article>
      </main>
    );
  };
  
  export default HomePage;