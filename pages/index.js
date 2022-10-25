import { useSession, signIn } from "next-auth/react"
import Navbar from '../components/Navbar'
import SignOut from "../components/SignOut"
import RenderGames from "../components/RenderGames"
import {
  Button
} from '@chakra-ui/react'

export default function Component({ games }) {
  const { data: session } = useSession()
  if (session) {
    return <>
      <Navbar auth={session} />
      <RenderGames results={games} />
    </>
  }
  return <>
    <SignOut /><br />
    <Button onClick={() => signIn()}>Sign in</Button>
  </>
}

export const getServerSideProps = async () => {
  const res = await fetch('https://www.freetogame.com/api/games')
  const data = await res.json()


  return {
    props: {
      games: data
    }
  }
}