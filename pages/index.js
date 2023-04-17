import Head from 'next/head'
import Menu from '@/components/Menu'
import Hero from '@/components/Hero'
import Text from '@/components/Text'
import Date from '@/components/Date'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Menu />
      <Hero data={data.acf} />
      <Text data={data.acf} />
      <Date data={data.acf} />
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