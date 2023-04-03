import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is SSSRGO</p>
        <p>
          This is my first site with vanila Next.js
          <a href="htpps://nextjs.org/learn">
            step-by-step through Next.js begginer's tutorial
          </a>
        </p>
      </section>
    </Layout>
  )
}
