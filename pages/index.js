import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("[Etunimi Sukunimi]")
  const [email, setEmail] = useState("[Sähköpostiosoite]")
  const [address, setAddress] = useState("[osoite]")
  
  return (
    <main>
      <div className={"container"}>
        <div className={"header-container"}>
          <h1>Tutkintapyyntö TRAFICOMille</h1>
        </div>
        <div className={"row"}>
          <div className={"col-md-6"}>
            <form>
              <h2>Lähettäjän yhteystiedot</h2>
              <label>Nimi</label>
              <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}/>
              <label>Sähköpostiosoite</label>
              <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
              <h2>Tutkittava verkkosivu</h2>
              <label>Sivuston osoite</label>
              <input type="address" id="address" name="address" onChange={e => setAddress(e.target.value)}/>
            </form>
          </div>
          <div className={"col-md-6"}>
            <h2>Esikatselu</h2>
            <div className={"preview"}>
              <p>
                {`Täten vaadin että Traficom selvittää onko verkkosivusto ${address} tallentanut päätelaitteelleni tietoja ilman lupaa ja tekee asiasta virallisen hallintopäätöksen.`}
              </p>
              <p>Parhain terveisin<br/>{name}<br/>{email}</p>
            </div>
          </div>
        </div>
        <button className={"submit"}>Lähetä</button>
      </div>
    </main>
  )
}
