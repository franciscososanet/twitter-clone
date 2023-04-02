import Feed from "@/components/Feed"
import Header from "@/components/Header"
import Form from "@/components/Form"
import RegisterModal from "@/components/modals/RegisterModal"

export default function Home() {
  return (
    <>
      <Header label="Inicio" />
      <Form placeholder="¿Qué está pasando?" />
      <Feed posts={[1, 2, 3]} />
    </>
  )
}
