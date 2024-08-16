

const Home = () => {
    return (
        <div className="home">
            <h1>Úvod</h1>
            <p>
                Tato webová aplikace slouží k ukládání osob a údajů, potřebných pro správu příspěvků na penzijní produkty
            </p>

            <table>
                <td>
                    <h3>Přidat</h3>
                    <p>
                        Aplikace umožňuje přidat osobu. Po přidání je možné zobrazit detail konkrétní osoby, upravit její údaje nebo ji smazat.
                        K operacím s osobami slouží záložka "Seznam"
                    </p>
                </td>
                <td>
                    <h3>Výpočítat</h3>
                    <p>Aplikace vypočítá výši měsíčního příspěvku na penzijní produkty. Výpočet provede na zákaldě vložení částky stanovené pro výpočet měsíčního příspěvku na plný úvazek (dále "FTJ"). </p>
                </td>
                <td>
                    <h3>Vytisknout</h3>
                    <p>Aplikace výslednou tabulku s potřebnými údaji a výší příspěvku převede do pdf. formátu.</p>
                </td>
            </table>

                  
        </div>


    )




}
export default Home;