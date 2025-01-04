import Layout from '../components/layout'
import BackLink from '../components/backLink'

const ListLike = () => (
  <Layout title="things paul craig likes">
    <h1>Things I like</h1>

    <p>
      Like a hot cup of tea on a rainy day.{' '}
      <span role="img" aria-label="Smiling face with smiling eyes">
        😊
      </span>
    </p>

    <ul>
      <li>falafel wrap chili sauce garlic sauce</li>
      <li>
        <a href="/work-groundhog-day">groundhogs</a>
      </li>
      <li>Americanos</li>
      <li>
        <a href="https://rhianna.ca" target="_blank">
          rhianna (dot ca)
        </a>
      </li>
      <li>Feminism</li>
      <li>APIs</li>
      <li>
        <a href="https://www.youtube.com/watch?v=gkQoCCsu_fA" target="_blank">
          Simian Mobile Disco
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/maps/place/Figueira+da+Foz,+Portugal/@40.1558637,-8.8718543,13z/data=!3m1!4b1!4m5!3m4!1s0xd2237e03def9c41:0x878e2298dda9f4de!8m2!3d40.1521398!4d-8.857583"
          target="_blank"
        >
          Figueira da Foz
        </a>{' '}
        &{' '}
        <a href="https://www.google.com/maps/place/9400-226+Porto+Santo,+Portugal/@33.0499991,-16.3602997,15z/data=!3m1!4b1!4m6!3m5!1s0xc5fdd4da55b2bb3:0x4507b636d9442cb4!8m2!3d33.05!4d-16.35!16s%2Fg%2F122n06yv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
          Porto Santo
        </a>
      </li>
      <li>
        <a
          href="https://www.goodreads.com/book/show/56034.The_French_Lieutenant_s_Woman"
          target="_blank"
        >
          The French Lieutenant’s Woman by John Fowles
        </a>
      </li>
      <li>
        Also,{' '}
        <a href="https://www.goodreads.com/book/show/78024.And_Quiet_Flows_the_Don" target="_blank">
          And Quiet Flows the Don by Mikhail Sholokhov
        </a>
      </li>
      <li>Version control</li>
      <li>Phở</li>
      <li>
        <a href="https://myanimelist.net/anime/13601/Psycho-Pass" target="_blank">
          Psycho-Pass
        </a>
      </li>
      <li>Techno shows</li>
      <li>
        <a href="https://www.youtube.com/watch?v=EdwzQPGzPSo" target="_blank">
          the Batman Beyond intro music
        </a>
      </li>
      <li>
        <a href={'/img/nt.jpg'}>the National Theatre</a>
      </li>
      <li>A hot cup of (Earl Grey) tea on a rainy day</li>
      <li>
        <a href="https://www.imdb.com/title/tt1526318" target="_blank">
          Borgen
        </a>{' '}
        (even the new season!)
      </li>
    </ul>

    <BackLink href="/preferences" />
  </Layout>
)

export default ListLike
