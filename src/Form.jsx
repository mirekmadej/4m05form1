import './Form.css';

const kursy = [
    {id:1, nazwa:"C# dla odpornych"},
    {id:2, nazwa:"JavaScript w 24 godziny"},
    {id:3, nazwa:"MAUI na egzamin"},
    {id:4, nazwa:"React dla debesciaków"},
    {id:5, nazwa:"React dla debesciaków"},
];

function Form()
{
    function zapiszNaKurs()
    {
        let imie = document.getElementById('imie').value;
        let kurs = document.getElementById('nrKursu').value;
        console.log(imie, kurs);
    }
    return(
        <>
            <h3>Oferta kursów:</h3>
            <ol>
                {kursy.map((e) => (<li key={e.id}>{e.nazwa}</li>))}
            </ol>
            <p>
                <label htmlFor='imie'>imię:</label> 
                <input type='text' id='imie' />
            </p>
            <p>
                <label htmlFor='nrKursu'>numer kursu: </label>
                    <input 
                type='number' min="1" max={kursy.length} id='nrKursu' /></p>
            <button onClick={zapiszNaKurs}>Zatwierdź</button>
        </>
    );
}
export default Form;