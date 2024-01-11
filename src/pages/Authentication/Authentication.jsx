import { AuthContainer, Section } from "./AuthenticationStyled";

export function Authentication() {
  return (
    <>
      <AuthContainer>
        <Section type="sigin">
          <h2>Entrar</h2>
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </Section>

        <Section type="sigup">
          <h2>Cadastrar</h2>
        </Section>
      </AuthContainer>
    </>
  )
}