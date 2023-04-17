import Head from 'next/head'
import Menu from '@/components/Menu'
import Hero from '@/components/Hero'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Menu />
      <Hero data={data.acf} />
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://${process.env.DOMAIN}/wp-json/wp/v2/pages/${process.env.ID}?_fields=acf`)
  const data = await res.json()

  return {
    props: { data },
  }
}