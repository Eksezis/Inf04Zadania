import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [Kursy, setKursy] = useState([
    { id: 1, name: "Programowanie w C#", capacity: 20, enrolled: 15 },
    { id: 2, name: "Angular dla początkujących", capacity: 15, enrolled: 15 },
    { id: 3, name: "Kurs Django", capacity: 25, enrolled: 10 }
  ])
  const [ImieNazwisko, setImieNazwisko] = useState()
  const [WybranyKurs, setWybranyKurs] = useState()

  const submit = (e) => {
    e.preventDefault()
    if (ImieNazwisko == '') { console.log("Imie i Nazwisko są puste") }
    else { 
      if (Kursy[WybranyKurs-1].enrolled == Kursy[WybranyKurs-1].capacity) { console.log(`Brak miejsc: ${Kursy[WybranyKurs-1].name}`) }
      else {
        console.log(`Zapisano: ${ImieNazwisko} na ${Kursy[WybranyKurs-1].name}`)
        setKursy(Kursy.map(kurs => 
          kurs.id === WybranyKurs ? {...kurs, enrolled: kurs.enrolled + 1} : kurs
        )) 
      }
    }
  }

  const changeImie = (e) => {
    setImieNazwisko(e.target.value)
  }
  const changeKurs = (e) => {
    setWybranyKurs(Number(e.target.value))
  }


  return (
    <>
      <div className='container mt-4'>
        <h2>Lista Kursów</h2>
        <div className='row mb-4'>
          {Kursy.map( kurs => 
            <div className='col-md-4 mb-3' key={kurs.id}>
              <div className='card'>
                <div className='card-body'>
                  <h5>{kurs.name}</h5>
                  Zapisanych: {kurs.enrolled}/{kurs.capacity} 
                </div>
              </div>
            </div>
          )}
        </div>
        <form className='mt-4' onSubmit={submit}>
          <label>Imię i Nazwisko:</label>
            <input className='form-control' id='ImieNazwisko' onChange={changeImie}></input>
          <label>Kurs:</label>
            <select className='form-control' id='WybranyKurs' onChange={changeKurs}>
              <option value=''>Wybierz kurs...</option>
              {Kursy.map( kurs => 
                <option value={kurs.id} key={kurs.id}>{kurs.name}</option>
              )}
            </select>
          <button type="submit" className="btn btn-primary">Zapisz</button>
        </form>
      </div>
    </>
  )
}

export default App
