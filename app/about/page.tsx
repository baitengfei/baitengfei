// app/page.tsx
const HomePage = () => {
    return (
      <main>
        <article>
          <h2>白腾飞</h2>
          <p>
            关注科技和有趣的产品，作为打工人参与过一些智能硬件产品如智能手表/智能音箱/餐饮机器人等产品的研发，希望能有越来越多属于自己的作品。
          </p>
        </article>
  
        <article>
          <h2>个人作品</h2>
          <h3>逃脱智能房子</h3>
          <p>
            一个密室逃脱类的小游戏。谜题使用了一些智能家居的元素。
            使用微信扫一扫试玩：
          </p>
          <img
            src="/assets/images/escaperoom.jpg"
            alt="escaperoom_game"
            style={{ width: '100px', height: '100px', display: 'block', margin: 'auto' }}
          />
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
        </article>
      </main>
    );
  };
  
  export default HomePage;